import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { GalleryClient } from "./client-page";

export const metadata: Metadata = {
  title: "Gallery — Ferta Junindi",
  description:
    "Visual archive of Ferta Junindi: award nights, studio experiments, and portraits from the road.",
};

export default function GalleryPage() {
  return (
    <SiteShell>
      <GalleryClient />
    </SiteShell>
  );
}
