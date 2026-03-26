import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); // name, email, subject, message
    // Aquí llamarías a tu Google Sheet (Apps Script o API)
    // Ejemplo temporal: simulamos éxito
    console.log('Recibido:', data);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}