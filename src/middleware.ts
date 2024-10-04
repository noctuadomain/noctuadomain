import { NextRequest, NextResponse } from 'next/server';
import { updateSession } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);
  if (!response) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  return response;
}

export const config = {
  matcher: '/api/projects'
};
