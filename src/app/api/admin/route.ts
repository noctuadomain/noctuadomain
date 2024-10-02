import { NextRequest, NextResponse } from 'next/server';

import pool from '@/lib/db';
import { Admin } from '@/ts/interfaces';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email parameter is missing' }, { status: 400 });
  }

  try {
    const res = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);
    const admin = res.rows[0] as Admin;

    return NextResponse.json(admin, { status: 200 });
  } catch (error) {
    console.error('Request execution error:', error);

    return NextResponse.json({ error: 'Request execution error' }, { status: 500 });
  }
}
