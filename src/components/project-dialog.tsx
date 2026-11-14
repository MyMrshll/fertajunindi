"use client";

import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";
import { GithubIcon } from "@/components/icons";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ProjectDialog({
  project,
  onOpenChange,
}: {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-[#191740] text-[#F6E8C8] border border-[#F6E8C8]/15 p-6">
        {project && (
          <>
            <DialogHeader>
              <div className="font-mono-code text-[11px] uppercase tracking-[0.14em] text-[#FCC27D]">
                {project.category} · {project.year}
              </div>
              <DialogTitle className="font-pixel text-2xl sm:text-3xl font-bold text-[#F6E8C8]">
                {project.title}
              </DialogTitle>
              <DialogDescription className="font-mono-code text-sm text-[#B9A9C5] leading-relaxed">
                {project.description}
              </DialogDescription>
            </DialogHeader>

            <div className="relative aspect-[2/1] w-full rounded-xl overflow-hidden border border-[#F6E8C8]/10 bg-[#2A2C6A]/30">
              <ImageWithSkeleton
                src={project.image}
                alt={project.title}
                wrapperClassName="h-full w-full"
              />
            </div>

            {project.tags && (
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-code text-[11px] px-2.5 py-1 rounded-full border border-[#F6E8C8]/10 bg-[#2A2C6A]/30 text-[#B9A9C5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#A94A5A] px-4 py-2 font-mono-code text-xs font-bold text-[#F6E8C8] transition-colors hover:bg-[#983E4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
                >
                  <GithubIcon className="size-4" />
                  Repository
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#F6E8C8]/20 px-4 py-2 font-mono-code text-xs text-[#F6E8C8]/85 transition-colors hover:border-[#B95465]/60 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
                >
                  Live Demo
                  <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}