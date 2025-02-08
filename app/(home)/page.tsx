import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-gradient-to-r p-12 text-center">
      <h1 className="mb-6 text-4xl font-extrabold">Design & Build Faster Than Ever 🚀</h1>
      <p className="mb-8 text-lg">
        Your one-stop destination for quick and seamless access to our documentation and resources.
      </p>
      <Link href="/projects">
        <Button>Get Started</Button>
      </Link>
    </main>
  );
}
