import { NextRequest, NextResponse } from 'next/server';

export async function POST(NextRequest) {
  return NextResponse.json({ message: 'success' }, { status: 200 });
}
