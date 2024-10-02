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

export async function POST(request: Request) {
  try {
    const { link, title } = await request.json();
    const res = await pool.query('INSERT INTO projects (link, title) VALUES ($1, $2) RETURNING *', [
      link,
      title
    ]);
    const project = res.rows[0] as Project;

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Failed to add project:', error);

    return NextResponse.json({ error: 'Failed to add project' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }

    await pool.query('DELETE FROM projects WHERE id = $1', [id]);

    return NextResponse.json({ message: 'Project deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to delete project:', error);

    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, link, title } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }

    const res = await pool.query(
      'UPDATE projects SET link = $1, title = $2 WHERE id = $3 RETURNING *',
      [link, title, id]
    );
    const project = res.rows[0] as Project;

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error('Failed to update project:', error);

    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}
