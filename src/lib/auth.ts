'use server';

import { FieldValues } from 'react-hook-form';
import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { tokenTimelineToMs } from './utils';
import { getAdminByEmail } from '@/services/admin';
import { Admin } from '@/ts/interfaces';

const secretKey = process.env.AUTH_SECRET;
const key = new TextEncoder().encode(secretKey);

const tokenTimeline = process.env.AUTH_TOKEN_TIMELINE;

if (!tokenTimeline) {
  throw new Error('TOKEN_TIMELINE environment variable is not set');
}

const tokenTimelineNum = parseInt(tokenTimeline, 10);
const tokenTimelineUnit = tokenTimeline.at(-1);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${tokenTimelineNum} ${tokenTimelineUnit} from now`)
    .sign(key);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256']
  });
  return payload;
}

async function verifyAdmin(email: string): Promise<Admin> {
  const response = await getAdminByEmail(email);
  const admin = response.data as Admin;
  if (!admin?.id) {
    throw new Error('Admin with this email was not found');
  }
  return admin;
}

async function verifyPassword(inputPassword: string, storedPassword: string): Promise<void> {
  const isPasswordsEquals = await bcrypt.compare(inputPassword, storedPassword);
  if (!isPasswordsEquals) {
    throw new Error('Incorrect password');
  }
}

export async function login(formData: FieldValues) {
  const admin = await verifyAdmin(formData.email);
  await verifyPassword(formData.password, admin.password);

  const expires = new Date(Date.now() + tokenTimelineToMs(tokenTimeline));
  const sessionPayload = {
    id: admin.id,
    email: admin.email,
    expires
  };
  const session = await encrypt(sessionPayload);

  cookies().set('session', session, {
    expires,
    httpOnly: true,
    secure: process.env.DEVELOPMENT_STAGE === 'production'
  });
}

export async function logout() {
  cookies().set('session', '', { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get('session')?.value;

  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  console.log('session', session);
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + tokenTimelineToMs(tokenTimeline));
  const res = NextResponse.next();
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    secure: process.env.DEVELOPMENT_STAGE === 'production',
    expires: parsed.expires
  });
  return res;
}
