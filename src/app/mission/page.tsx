// app/mission/page.tsx
"use client";

import Link from "next/link";

export default function Mission() {
  return (
    <main>
      <h1 className="text-8xl font-bold mt-9 text-center">Vision</h1>
      <div className="max-w-4xl mx-auto text-center mt-6 text-xl">
        <h2 className="text-4xl mb-4">Purpose</h2>
        <p>
          Verses such as Mark 12:29-31, Colossians 3:2, Matthew 6:33, Matthew
          28:18-20, and many others make clear what the greatest priorities of
          Christians are: Love God, Love people. Everything stems from this, and
          so everything Kairos is and stands for stems from this as well.
          Project Kairos is developed particularly for the “Love people” point,
          because one of the most loving things one can do is share the Gospel,
          both to unbelievers and even believers. I want to use my abilities to
          impact the kingdom of God to the greatest extent I can, something I
          hope to achieve through Kairos.
        </p>
        <h2 className="text-4xl my-4">Mission</h2>
        <p>
          Kairos will be a platform designed to eliminate current inefficiencies
          in existing processes and create new processes to improve overall
          efficiency. The idea is that greater efficiency in the Church's
          service efforts will lead to more of the Gospel being shared, because
          service provides ideal opportunities for sharing the Gospel. Kairos
          will be involved throughout the service lifecycle, from the opportune
          moment (the “kairos”) to serve to the next.
        </p>
      </div>
    </main>
  );
}
