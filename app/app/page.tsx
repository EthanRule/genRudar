'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import { MainTitle } from './MainTitle';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  const handleGetStarted = () => {
    if (status === 'authenticated') {
      router.push('/gen');
    } else {
      router.push('/auth?callbackUrl=/gen');
    }
  };

  // Handle background image loading and fade-in
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      // Wait for image to render, then start fade-in
      setTimeout(() => {
        setIsBackgroundLoaded(true);
      }, 100);
    };
    img.src = '/background.png';
  }, []);

  return (
    <div className="bg-black flex flex-col min-h-screen">
      <Header props={{ status, session }} />
      <main className="flex justify-center mx-2 mt-2 flex-1">
        <div className="bg-stone-950 rounded-lg border border-stone-700 w-full flex flex-col relative overflow-hidden min-h-[calc(100vh-1rem)]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div
              className={`w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-[10000ms] ease-out ${
                isBackgroundLoaded ? 'opacity-100 scale-105' : 'opacity-0 scale-100 rotate-1'
              }`}
              style={{
                backgroundImage: `url('/background.png')`,
                filter: ' brightness(0.8)',
                transform: 'scale(1.0)',
              }}
            />
          </div>

          <div className="flex flex-1 items-center justify-center px-6 text-center relative z-10">
            <MainTitle />
          </div>

          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <button
                onClick={handleGetStarted}
                className="bg-cyan-400 hover:bg-cyan-200 text-black px-12 py-6 rounded-xl text-2xl font-bold shadow-lg hover:shadow-xl shadow-cyan-400/50 transform active:scale-103 hover:scale-105 transition-all duration-500 ease-initial sm:min-w-[400px]"
              >
                START
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Always visible */}
      <div className="mt-2 mb-2 overflow-x-auto">
        <Footer props={{ status, session }} />
      </div>
    </div>
  );
}
