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
        frontImage="/images/ferta-foto.png"
        backImage="/images/Gemini_Generated_Image_o9woxlo9woxlo9wo.jpg"
        strapImage="/images/nuanscape-lanyard-rope.jpg"
        cardColor="#191740"
        finish="glossy"
        size={0.58}
        anchor="about"
        strapLength={0.34}
        strapWidth={0.8}
        strapColor="#000000"
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
