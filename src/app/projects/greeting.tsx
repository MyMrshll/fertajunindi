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
      <p className="dash-eyebrow">{greeting}, Ferta</p>
      <h1 className="mt-1 font-pixel text-2xl font-bold tracking-tight text-[#F6E8C8] sm:text-3xl">
        PROJECT INDEX
      </h1>
    </div>
  );
}