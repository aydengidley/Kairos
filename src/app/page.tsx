// app/page.tsx
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-kairosDark text-foreground px-6 py-12 sm:px-12 lg:px-24">
      {/* HERO */}
      <section className="text-center space-y-6 mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Welcome to Kairos
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-muted">
          Coordinating relief, missions, and response efforts when it matters
          most.
        </p>
        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <Link
            href="/map"
            className="bg-foreground text-background px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            View the Map
          </Link>
          <Link
            href="/mission"
            className="border border-foreground px-6 py-3 rounded-xl font-semibold hover:bg-foreground hover:text-background transition"
          >
            Our Mission
          </Link>
        </div>
      </section>

      {/* MISSION TEASER */}
      <section className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-semibold mb-2">What is Kairos?</h2>
        <p className="text-muted text-lg">
          Kairos is a platform designed to aid primarily in the church's
          external service efforts, such as global humanitarian aid, local
          disaster relief, or missionary support
        </p>
      </section>

      {/* MAP PREVIEW TEASER */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Visualize Relief</h2>
        <p className="text-muted text-lg mb-6">
          The interactive map highlights aid efforts, mission zones, and
          disaster response activity in real time.
        </p>
        <Link
          href="/map"
          className="inline-block bg-kairosGold text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Explore the Map
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 text-center text-sm text-muted">
        © {new Date().getFullYear()} Kairos. All rights reserved.
      </footer>
    </main>
  );
}
