"use client";

import { useEffect, useState } from "react";

export function HomeGreeting() {
  const [greeting, setGreeting] = useState("Welcome back");

  useEffect(() => {
    const hour = new Date().getHours();
    const time =
      hour < 12
        ? "Good morning"
        : hour < 18
          ? "Good afternoon"
          : "Good evening";
    setGreeting(`${time}, Ferta`);
  }, []);

  return (
    <div>
      <p className="dash-eyebrow">{greeting}</p>
      <h1 className="mt-1 font-pixel text-2xl font-bold tracking-tight text-[#F4F4F5] sm:text-3xl">
        STUDIO DASHBOARD
      </h1>
    </div>
  );
}
