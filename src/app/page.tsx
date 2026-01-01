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
        <p className="text-2xl max-w-2xl mx-auto text-muted">
          Enhancing efficiency and effectiveness in service to amplify the
          impact of the Gospel
        </p>
        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <Link
            href="/map"
            className="bg-foreground text-background px-6 py-3 rounded-xl font-semibold hover:opacity-70 transition"
          >
            Map
          </Link>
          <Link
            href="/mission"
            className="border border-foreground px-6 py-3 rounded-xl font-semibold hover:bg-foreground hover:text-background transition"
          >
            Vision
          </Link>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-semibold mb-2">What is Kairos?</h2>
        <p className="text-muted text-lg">
          Kairos is a platform designed to aid in the church's
          service efforts, such as in global humanitarian aid, local
          disaster relief, or missionary support. It will be designed to increase service engagement and retention, as well as improve existing processes in contributing to service initiatives.
        </p>
      </section>

      {/* MAP PREVIEW */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Visualize Relief</h2>
        <p className="text-muted text-lg mb-6">
          The interactive map will highlight current aid efforts, contributors, and needs by region to guide decision making and resource allocation.
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
