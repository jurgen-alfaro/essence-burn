import { NextResponse } from 'next/server';

const ZEN_QUOTES_URL = 'https://zenquotes.io/api/random';
const DEEPL_API_URL = 'https://api-free.deepl.com/v2/translate'; // versión gratuita

export const revalidate = 86400; // Cache global 1 día (24h)

export async function GET() {
  try {
    // 1️⃣ Obtener una quote en inglés
    const zenRes = await fetch(ZEN_QUOTES_URL, { next: { revalidate: 86400 } });
    const data = await zenRes.json();

    if (!data || !Array.isArray(data) || !data[0]) {
      return NextResponse.json({ error: 'No quote found' }, { status: 500 });
    }


    const quoteEn = data[0].q;
    const author = data[0].a;

    // 2️⃣ Traducir la quote al español con DeepL
    const deeplKey = process.env.DEEPL_API_KEY;
    if (!deeplKey) {
      throw new Error('Falta la clave de API de DeepL en las variables de entorno');
    }

    const formData = new URLSearchParams();
    formData.append('auth_key', deeplKey);
    formData.append('text', quoteEn);
    formData.append('target_lang', 'ES');

    const deeplRes = await fetch(DEEPL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
      next: { revalidate: 86400 },
    });

    const deeplData = await deeplRes.json();
    const translated = deeplData?.translations?.[0]?.text ?? quoteEn;

    // 3️⃣ Devolver la quote traducida
    return NextResponse.json({
      original: quoteEn,
      translated,
      author,
      source: 'ZenQuotes + DeepL',
      date: new Date().toISOString().split('T')[0],
    });
  } catch (error) {
    console.error('Error fetching quote:', error);
    return NextResponse.json({ error: 'Error fetching daily quote' }, { status: 500 });
  }
}
