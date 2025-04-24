'use client';
import dynamic from 'next/dynamic';
import { signIn, signOut, useSession } from 'next-auth/react';
const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false });

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className="h-screen flex flex-col">
      <header className="p-4 flex justify-between bg-gray-900 text-white">
        <h1 className="text-xl font-bold">DeepStrike</h1>
        {session ? (
          <button onClick={() => signOut()} className="btn-logout">Вийти</button>
        ) : (
          <button onClick={() => signIn('google')} className="btn-login">Увійти через Google</button>
        )}
      </header>
      <div className="flex-1"><MapComponent /></div>
    </main>
  );
}

