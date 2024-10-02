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

export async function login(formData: FieldValues) {
  // Verify credentials && get the user

  const response = await getAdminByEmail(formData.email);

  const admin = response.data as Admin;
  if (!admin?.id) {
    throw new Error('Admin with this email was not found');
  }

  const isPasswordsEquals = await bcrypt.compare(formData.password, admin.password);
  if (!isPasswordsEquals) {
    throw new Error('Incorrect password');
  }

  // Create the session
  const expires = new Date(Date.now() + tokenTimelineToMs(tokenTimeline));
  const session = await encrypt({ admin, expires });

  // Save the session in a cookie
  cookies().set('session', session, { expires, httpOnly: true });
}

export async function logout() {
  // Destroy the session
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
    expires: parsed.expires
  });
  return res;
}
