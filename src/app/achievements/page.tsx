import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { AchievementsClient } from "./client-page";

export const metadata: Metadata = {
  title: "Achievements — Ferta Junindi",
  description:
    "Verified national hackathon awards, Kominfo certifications, academic honors, and systems engineering milestones of Ferta Junindi.",
};

export default function AchievementsPage() {
  return (
    <SiteShell>
      <main className="py-2">
        <AchievementsClient />
      </main>
    </SiteShell>
  );
}
