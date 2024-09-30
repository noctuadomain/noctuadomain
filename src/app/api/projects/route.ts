import { Project } from '@/ts/interfaces';
import { NextResponse } from 'next/server';
import { Client } from 'pg';

export async function GET() {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    ssl: true
  });

  await client.connect();

  try {
    const res = await client.query('SELECT * FROM projects ORDER BY id');
    const projects = res.rows as Project[];

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Request execution error:', error);

    return NextResponse.json({ error: 'Request execution error' }, { status: 500 });
  } finally {
    await client.end();
  }
}
