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
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#FCC27D]">
              Nuanscape · invited · contributed
            </p>
            <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[#F6E8C8] pixel-text-shadow mt-1.5">
              COLLABORATIONS
            </h2>
          </div>
          <p className="font-mono-code text-[11px] text-[#B9A9C5]">
            {privateCount} private · {publicCount} public repos
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
          {COLLABORATIONS.map((item) => {
            const body = (
              <div className="dash-card group flex flex-col rounded-xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-pixel text-sm font-bold text-[#F6E8C8] truncate">
                      {item.name}
                    </p>
                    <p className="font-mono-code text-[11px] text-[#B9A9C5] mt-0.5 truncate">
                      {item.owner} · {item.role}
                    </p>
                  </div>
                  {item.visibility === "private" ? (
                    <Lock
                      className="size-3.5 shrink-0 text-[#B9A9C5]/85"
                      aria-label="Private repository"
                    />
                  ) : (
                    <ArrowUpRight
                      className="size-3.5 shrink-0 text-[#B9A9C5]/85 transition-colors group-hover:text-[#FCC27D]"
                      aria-label="Public repository"
                    />
                  )}
                </div>

                {item.description && (
                  <p className="font-mono-code text-xs leading-relaxed text-[#B9A9C5] mt-2 break-words">
                    {item.description}
                  </p>
                )}

                <div className="mt-3 flex flex-wrap items-center gap-2 font-mono-code text-[11px] text-[#B9A9C5]">
                  {item.language && (
                    <span className="px-2 py-0.5 rounded-full border border-[#F6E8C8]/10 bg-[#2A2C6A]/30 text-[#B9A9C5]">
                      {item.language}
                    </span>
                  )}
                  <span>{item.year} · {item.visibility === "private" ? "Private repo" : "Public repo"}</span>
                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FCC27D]/90 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3] rounded"
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
                  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
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
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#FCC27D]">
              Public archive
            </p>
            <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[#F6E8C8] pixel-text-shadow mt-1.5">
              MORE REPOSITORIES
            </h2>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#F6E8C8]/15 px-4 py-1.5 font-mono-code text-[11px] text-[#B9A9C5] transition-colors hover:border-[#FCC27D]/50 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
          >
            <GithubIcon className="size-3.5" />
            Browse all {PROFILE.publicRepos} on GitHub
          </a>
        </div>

        <p className="mt-3 font-mono-code text-[11px] text-[#B9A9C5]/90">
          {OTHER_REPOS.length} additional public repos · {PROFILE.publicRepos} total on GitHub
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {OTHER_REPOS.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 border-b border-white/[0.06] py-3 transition-colors hover:border-[#B95465]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3] rounded-sm"
            >
              <span className="flex min-w-0 items-center gap-2">
                <span className="truncate font-mono-code text-xs text-[#B9A9C5] transition-colors group-hover:text-[#FCC27D]">
                  {repo.name}
                </span>
                {repo.stars > 0 && (
                  <span className="flex shrink-0 items-center gap-0.5 font-mono-code text-[11px] text-[#FCC27D]">
                    <Star className="size-3" />
                    {repo.stars}
                  </span>
                )}
              </span>
              <span className="shrink-0 font-mono-code text-[11px] uppercase tracking-[0.12em] text-[#B9A9C5]/85">
                {repo.language ?? "—"} · {repo.year}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
