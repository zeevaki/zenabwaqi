"use client";

import { useState } from "react";

const USER = "zeevaki";
const DOMAIN = "gmail.com";

export default function EmailButton() {
  const [revealed, setRevealed] = useState(false);
  const email = `${USER}@${DOMAIN}`;

  if (!revealed) {
    return (
      <button
        onClick={() => setRevealed(true)}
        className="inline-block bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors mb-10"
      >
        Email Me
      </button>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      className="inline-block bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors mb-10"
    >
      {email}
    </a>
  );
}
