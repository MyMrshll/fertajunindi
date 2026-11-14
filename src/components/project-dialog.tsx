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
      <DialogContent className="sm:max-w-2xl bg-[#121215] text-[#F4F4F5] border border-white/10 p-6 shadow-2xl">
        {project && (
          <>
            <DialogHeader>
              <div className="font-mono-code text-[11px] uppercase tracking-[0.14em] text-[#A1A1AA]">
                {project.category} · {project.year}
              </div>
              <DialogTitle className="font-pixel text-2xl sm:text-3xl font-bold text-[#F4F4F5]">
                {project.title}
              </DialogTitle>
              <DialogDescription className="font-mono-code text-sm text-[#A1A1AA] leading-relaxed">
                {project.description}
              </DialogDescription>
            </DialogHeader>

            <div className="relative aspect-[2/1] w-full rounded-xl overflow-hidden border border-white/10 bg-[#18181B]">
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
                    className="font-mono-code text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[#A1A1AA]"
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#27272A] px-4 py-2 font-mono-code text-xs font-bold text-white transition-colors hover:bg-[#3F3F46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono-code text-xs text-[#F4F4F5] transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
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