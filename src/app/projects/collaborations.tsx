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
      <section className="mt-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-amber-400">
              Nuanscape · invited · contributed
            </p>
            <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[#F5EEDB] pixel-text-shadow mt-1.5">
              COLLABORATIONS
            </h2>
          </div>
          <p className="font-mono-code text-[11px] text-[#F5EEDB]/55">
            {privateCount} private · {publicCount} public repos
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
          {COLLABORATIONS.map((item) => {
            const body = (
              <div className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors duration-200 hover:border-amber-400/40 hover:bg-white/[0.04]">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-pixel text-sm font-bold text-[#F5EEDB] truncate">
                      {item.name}
                    </p>
                    <p className="font-mono-code text-[11px] text-[#F5EEDB]/55 mt-0.5 truncate">
                      {item.owner} · {item.role}
                    </p>
                  </div>
                  {item.visibility === "private" ? (
                    <Lock
                      className="size-3.5 shrink-0 text-[#F5EEDB]/45"
                      aria-label="Private repository"
                    />
                  ) : (
                    <ArrowUpRight
                      className="size-3.5 shrink-0 text-[#F5EEDB]/45 transition-colors group-hover:text-amber-300"
                      aria-label="Public repository"
                    />
                  )}
                </div>

                {item.description && (
                  <p className="font-mono-code text-xs leading-relaxed text-[#F5EEDB]/60 mt-2 break-words">
                    {item.description}
                  </p>
                )}

                <div className="mt-3 flex flex-wrap items-center gap-2 font-mono-code text-[11px] text-[#F5EEDB]/55">
                  {item.language && (
                    <span className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[#F5EEDB]/60">
                      {item.language}
                    </span>
                  )}
                  <span>{item.year} · {item.visibility === "private" ? "Private repo" : "Public repo"}</span>
                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300/90 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
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
                  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
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

      <section className="mt-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-amber-400">
              Public archive
            </p>
            <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[#F5EEDB] pixel-text-shadow mt-1.5">
              MORE REPOSITORIES
            </h2>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 font-mono-code text-[11px] text-[#F5EEDB]/70 transition-colors hover:border-amber-400/50 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <GithubIcon className="size-3.5" />
            Browse all {PROFILE.publicRepos} on GitHub
          </a>
        </div>

        <p className="mt-3 font-mono-code text-[11px] text-[#F5EEDB]/50">
          {OTHER_REPOS.length} additional public repos · {PROFILE.publicRepos} total on GitHub
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {OTHER_REPOS.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 border-b border-white/[0.06] py-3 transition-colors hover:border-amber-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
            >
              <span className="flex min-w-0 items-center gap-2">
                <span className="truncate font-mono-code text-xs text-[#F5EEDB]/75 transition-colors group-hover:text-amber-200">
                  {repo.name}
                </span>
                {repo.stars > 0 && (
                  <span className="flex shrink-0 items-center gap-0.5 font-mono-code text-[11px] text-amber-300">
                    <Star className="size-3" />
                    {repo.stars}
                  </span>
                )}
              </span>
              <span className="shrink-0 font-mono-code text-[11px] uppercase tracking-[0.12em] text-[#F5EEDB]/45">
                {repo.language ?? "—"} · {repo.year}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
