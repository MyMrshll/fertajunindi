import {
  COLLABORATIONS,
  GITHUB_URL,
  OTHER_REPOS,
  PROFILE,
} from "@/lib/projects";
import { GithubIcon } from "@/components/icons";
import { ArrowUpRight, Lock, Star } from "lucide-react";

export function Collaborations() {
  const privateCount = COLLABORATIONS.filter(
    (item) => item.visibility === "private"
  ).length;
  const publicCount = COLLABORATIONS.length - privateCount;

  return (
    <>
      <section id="collaborations" className="dash-panel mt-6 scroll-mt-6 p-5 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#A1A1AA]">
              Nuanscape · invited · contributed
            </p>
            <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[#F4F4F5] pixel-text-shadow mt-1.5">
              COLLABORATIONS
            </h2>
          </div>
          <p className="font-mono-code text-[11px] text-[#A1A1AA]">
            {privateCount} private · {publicCount} public repos
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
          {COLLABORATIONS.map((item) => {
            const body = (
              <div className="dash-card group flex flex-col rounded-xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-pixel text-sm font-bold text-[#F4F4F5] truncate">
                      {item.name}
                    </p>
                    <p className="font-mono-code text-[11px] text-[#A1A1AA] mt-0.5 truncate">
                      {item.owner} · {item.role}
                    </p>
                  </div>
                  {item.visibility === "private" ? (
                    <Lock
                      className="size-3.5 shrink-0 text-[#A1A1AA]"
                      aria-label="Private repository"
                    />
                  ) : (
                    <ArrowUpRight
                      className="size-3.5 shrink-0 text-[#A1A1AA] transition-colors group-hover:text-white"
                      aria-label="Public repository"
                    />
                  )}
                </div>

                {item.description && (
                  <p className="font-mono-code text-xs leading-relaxed text-[#A1A1AA] mt-2 break-words">
                    {item.description}
                  </p>
                )}

                <div className="mt-3 flex flex-wrap items-center gap-2 font-mono-code text-[11px] text-[#A1A1AA]">
                  {item.language && (
                    <span className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[#A1A1AA]">
                      {item.language}
                    </span>
                  )}
                  <span>{item.year} · {item.visibility === "private" ? "Private repo" : "Public repo"}</span>
                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E4E4E7] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                    >
                      Live demo ↗
                    </a>
                  )}
                </div>
              </div>
            );

            if (item.url) {
              return (
                <a
                  key={`${item.owner}/${item.name}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.name} repository on GitHub`}
                  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {body}
                </a>
              );
            }

            return (
              <div key={`${item.owner}/${item.name}`}>{body}</div>
            );
          })}
        </div>
      </section>

      <section id="archive" className="dash-panel mt-6 scroll-mt-6 p-5 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#A1A1AA]">
              Public archive
            </p>
            <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[#F4F4F5] pixel-text-shadow mt-1.5">
              MORE REPOSITORIES
            </h2>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 font-mono-code text-[11px] text-[#A1A1AA] transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <GithubIcon className="size-3.5" />
            Browse all {PROFILE.publicRepos} on GitHub
          </a>
        </div>

        <p className="mt-3 font-mono-code text-[11px] text-[#A1A1AA]/90">
          {OTHER_REPOS.length} additional public repos · {PROFILE.publicRepos} total on GitHub
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {OTHER_REPOS.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 border-b border-white/[0.06] py-3 transition-colors hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
            >
              <span className="flex min-w-0 items-center gap-2">
                <span className="truncate font-mono-code text-xs text-[#A1A1AA] transition-colors group-hover:text-white">
                  {repo.name}
                </span>
                {repo.stars > 0 && (
                  <span className="flex shrink-0 items-center gap-0.5 font-mono-code text-[11px] text-[#E4E4E7]">
                    <Star className="size-3" />
                    {repo.stars}
                  </span>
                )}
              </span>
              <span className="shrink-0 font-mono-code text-[11px] uppercase tracking-[0.12em] text-[#A1A1AA]">
                {repo.language ?? "—"} · {repo.year}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
