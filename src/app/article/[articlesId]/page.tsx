'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface PageProps {
  params: { articlesId: string };
}

export default function Articles({ params }: PageProps) {
  const { articlesId } = params;
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

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
