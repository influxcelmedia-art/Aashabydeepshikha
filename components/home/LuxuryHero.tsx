"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function LuxuryHero(){
  return (
    <section className="min-h-screen flex items-center bg-black">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <FadeIn>
          <p className="mb-6 text-sm uppercase tracking-[0.5em] text-[#d4af37]">
            Luxury • Elegance • Timeless Beauty
          </p>
          <h1 className="text-7xl md:text-9xl font-semibold tracking-[0.2em] text-white">
            AASHA
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            A celebration of refined beauty, crafted with passion and designed
            for unforgettable moments.
          </p>
          <button className="mt-10 rounded-full border border-[#d4af37] px-10 py-4 uppercase tracking-[0.3em] text-sm text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition">
            Explore Collection
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
