'use client';
import Image from 'next/image';

export function MainTitle() {
  return (
    <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-full max-w-2xl">
          <Image
            src="/example.png"
            alt="Example of context-assisted image generation"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <p className="text-lg text-gray-300 max-w-2xl text-center">
          This example demonstrates how our AI-powered tool uses context and assistance to
          generate high-quality images. Simply describe what you want, refine your prompt with
          suggested attributes, and watch as your vision comes to life.
        </p>
      </div>
    </div>
  );
}
