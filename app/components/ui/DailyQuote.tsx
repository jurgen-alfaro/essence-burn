'use client';
import { useEffect, useState } from 'react';

interface Quote {
  original: string;
  translated: string;
  author: string;
  source: string;
  date: string;
}

export default function DailyQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    fetch('/api/quote')
      .then((res) => res.json())
      .then(setQuote)
      .catch(console.error);
  }, []);

  if (!quote)
    return (
      <blockquote className="font-poiretone text-essence-cream rounded-lg border border-white/10 bg-white/5 px-4 py-6 text-center text-base leading-relaxed font-light tracking-wide italic backdrop-blur-sm">
        <p>Cargando quote...</p>
      </blockquote>
    );

  return (
    <>
      <blockquote className="font-poiretone text-essence-cream rounded-lg border border-white/10 bg-white/5 px-4 py-6 text-center text-base leading-relaxed font-light tracking-wide italic backdrop-blur-sm">
        <p>&quot;{quote.translated}&quot;</p>
        {/* <p>&quot;{quote.original}&quot;</p> */}
        <footer className="mt-3 text-sm font-light tracking-widest uppercase">
          — {quote.author} —
        </footer>
      </blockquote>
      <p className="text-xxs text-essence-mauve-700 mt-2 text-right">
        Inspirational quotes provided by{' '}
        <a href="https://zenquotes.io/" target="_blank" className="underline">
          ZenQuotes API
        </a>
      </p>
    </>
  );
}
