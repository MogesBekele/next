'use client';

import React, { use } from 'react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>;
}

export default function Articles({ params, searchParams }: PageProps) {
  const { articlesId } = use(params);
  const { lang = 'en' } = use(searchParams);

  return (
    <div>
      <h1>News article: {articlesId}</h1>
      <h1>Reading in: {lang}</h1>
      <div className="flex gap-4">
        <Link href={`/article/${articlesId}?lang=en`}>English</Link>
        <Link href={`/article/${articlesId}?lang=es`}>Spanish</Link>
        <Link href={`/article/${articlesId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
