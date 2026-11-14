"use client";

import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("@/components/ui/Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="size-8 animate-spin rounded-full border-2 border-[#FCC27D]/20 border-t-[#FCC27D]" />
    </div>
  ),
});

interface AboutLanyardProps {
  className?: string;
  active?: boolean;
}

export function AboutLanyard({
  className = "",
  active = true,
}: AboutLanyardProps) {
  return (
    <div
      className={`pointer-events-none relative ${className}`.trim()}
      aria-label="Interactive 3D developer pass lanyard"
    >
      <Lanyard
        frontImage="/images/profile.jpg"
        backImage="/images/card-back.png"
        cardColor="#0E0926"
        finish="glossy"
        size={0.58}
        anchor="about"
        strapLength={0.34}
        strapColor="#0B0A1D"
        metal="silver"
        gravity={1.1}
        breeze={0.4}
        interactive={true}
        intro={false}
        active={active}
      />
    </div>
  );
}

export default AboutLanyard;
