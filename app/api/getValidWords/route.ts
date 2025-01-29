// app/api/getValidWords/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getValidWords } from '@/utils/unscrambler'; // Adjust the import path as needed

export async function POST(req: NextRequest) {
  const { letters, length } = await req.json();

  if (!letters || !length) {
    return NextResponse.json({ error: 'Missing letters or length parameter' }, { status: 400 });
  }

  try {
    const validWords = await getValidWords(letters, parseInt(length, 10));
    console.log('Valid words:', validWords);
    return NextResponse.json({ validWords });
  } catch (error) {
    console.error('Error getting valid words:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}