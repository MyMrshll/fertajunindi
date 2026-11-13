"use client";

import { useEffect, useState } from "react";

export function Greeting() {
  const [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(
      hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening"
    );
  }, []);

  return (
    <div>
      <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#F5EEDB]/45">
        {greeting},
      </p>
      <h1 className="mt-0.5 font-pixel text-2xl font-bold tracking-tight text-[#F5EEDB] sm:text-3xl">
        FERTA
      </h1>
    </div>
  );
}