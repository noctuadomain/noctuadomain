import { NextResponse } from 'next/server';

import { Project } from '@/ts/interfaces';
import pool from '@/lib/db';

export async function GET() {
  try {
    const res = await pool.query('SELECT * FROM projects ORDER BY id');
    const projects = res.rows as Project[];

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Request execution error:', error);

    return NextResponse.json({ error: 'Request execution error' }, { status: 500 });
  }
}
