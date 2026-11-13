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
      <DialogContent className="sm:max-w-2xl bg-[#0b0f16] text-[#F5EEDB] border border-white/15 p-6">
        {project && (
          <>
            <DialogHeader>
              <div className="font-mono-code text-[11px] uppercase tracking-[0.14em] text-amber-400">
                {project.category} · {project.year}
              </div>
              <DialogTitle className="font-pixel text-2xl sm:text-3xl font-bold text-[#F5EEDB]">
                {project.title}
              </DialogTitle>
              <DialogDescription className="font-mono-code text-sm text-[#F5EEDB]/65 leading-relaxed">
                {project.description}
              </DialogDescription>
            </DialogHeader>

            <div className="relative aspect-[2/1] w-full rounded-xl overflow-hidden border border-white/10 bg-white/5">
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
                    className="font-mono-code text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[#F5EEDB]/75"
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
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 font-mono-code text-xs font-bold text-[#1a1206] transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-mono-code text-xs text-[#F5EEDB]/80 transition-colors hover:border-amber-400/60 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
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