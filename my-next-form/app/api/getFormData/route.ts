// my-next-form/app/api/getFormData/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // URL de tu Google Apps Script para leer datos
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzGWWzFqy1A4eJKx_2J2W3Y0gxCa2Y-WBHonP4i6p5lUeoFN44CyhxqBe2pD6eeolf2/exec';
    
    const res = await fetch(GOOGLE_SCRIPT_URL);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error al obtener datos' }, { status: 500 });
  }
}