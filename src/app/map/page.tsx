// app/map/page.tsx
"use client";

import Link from "next/link";

const handleClick = () => console.log("Button clicked!");

export default function Map() {
  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mt-12">
        Map
      </h1>
      <ul className="mt-8 space-y-4 text-lg text-center max-w-4xl mx-auto">
        <li>
          This map will be used for visualize needs by region for more effective
          and efficient planning and usage of resources. Right now, this page is
          a JS playground for me to learn TypeScript.
        </li>
        <li className="mt-32" onClick={handleClick}>
          Click this text and check your console!
        </li>
      </ul>
    </>
  );
}
