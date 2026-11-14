import { GithubIcon } from "@/components/icons";
import raw from "@/lib/github-contrib-data.json";
import { GITHUB_URL } from "@/lib/projects";

const LEVEL_STYLES = [
  "bg-[#161B22] border-white/5",
  "bg-[#0E4429] border-[#0E4429]",
  "bg-[#006D32] border-[#006D32]",
  "bg-[#26A641] border-[#26A641]",
  "bg-[#39D353] border-[#39D353]",
] as const;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const BREAKDOWN = [
  { label: "Commits", percent: 98, color: "bg-[#39D353]" },
  { label: "Issues", percent: 1, color: "bg-[#26A641]" },
  { label: "Pull requests", percent: 1, color: "bg-[#006D32]" },
] as const;

const TOP_REPOS = [
  { name: "MyMrshll/PT-ANH", detail: "Primary work" },
  { name: "muharriel06/ATTENDENCE-PT-A...", detail: "Team project" },
] as const;

const TOTAL = raw.total;
const LEVELS: number[] = raw.levels;
const COUNTS: number[] = raw.counts;
const START = new Date(`${raw.start}T00:00:00`);

function buildWeeks(levels: number[]): number[][] {
  const weeks: number[][] = [];
  for (let week = 0; week < 52; week += 1) {
    weeks.push(levels.slice(week * 7, week * 7 + 7));
  }
  return weeks;
}

function monthMarkers(): Map<number, string> {
  const markers = new Map<number, string>();
  const seen = new Set<string>();
  for (let week = 0; week < 52; week += 1) {
    const date = new Date(START);
    date.setDate(START.getDate() + week * 7);
    const key = `${date.getFullYear()}-${date.getMonth()}`;
    if (!seen.has(key)) {
      seen.add(key);
      markers.set(week, MONTHS[date.getMonth()]);
    }
  }
  return markers;
}

function formatDate(dayIndex: number): string {
  const date = new Date(START);
  date.setDate(START.getDate() + dayIndex);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function GitHubContributions() {
  const weeks = buildWeeks(LEVELS);
  const markers = monthMarkers();
  const activeDays = COUNTS.filter((count) => count > 0).length;

  return (
    <section className="dash-panel p-5" aria-labelledby="github-contrib-heading">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="dash-eyebrow">GitHub activity</p>
          <h2
            id="github-contrib-heading"
            className="mt-1 font-pixel text-xl font-bold text-[#F4F4F5]"
          >
            CONTRIBUTION GRAPH
          </h2>
          <p className="mt-1 font-mono-code text-[11px] text-[#A1A1AA]">
            {TOTAL} contributions in the last year · {activeDays} active days
          </p>
        </div>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 font-mono-code text-[10px] uppercase tracking-[0.15em] text-[#A1A1AA] transition-colors hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          <GithubIcon className="size-3.5" />
          @MyMrshll
        </a>
      </div>

      <div className="mt-5 overflow-x-auto">
        <div className="min-w-[760px]">
          <div className="flex gap-[4px]">
            <div className="w-7 shrink-0" />
            <div className="grid flex-1 grid-cols-[repeat(52,minmax(0,1fr))] gap-[4px] font-mono-code text-[9px] text-[#A1A1AA]/70">
              {weeks.map((_, index) => {
                const month = markers.get(index);
                return (
                  <span key={index} className="whitespace-nowrap">
                    {month ?? ""}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mt-1.5 flex gap-[4px]">
            <div className="flex w-7 flex-col gap-[4px] pr-1 font-mono-code text-[9px] text-[#A1A1AA]/70">
              {["", "Mon", "", "Wed", "", "Fri", ""].map((label, index) => (
                <span key={index} className="flex h-[12px] items-center">
                  {label}
                </span>
              ))}
            </div>
            <div className="grid flex-1 grid-cols-[repeat(52,minmax(0,1fr))] gap-[4px]">
              {weeks.map((week, weekIndex) =>
                week.map((level, dayIndex) => {
                  const day = weekIndex * 7 + dayIndex;
                  const count = COUNTS[day] ?? 0;
                  return (
                    <span
                      key={`${weekIndex}-${dayIndex}`}
                      title={`${count} contribution${count === 1 ? "" : "s"} on ${formatDate(day)}`}
                      className={`h-[12px] rounded-[2px] border ${LEVEL_STYLES[level]}`}
                    />
                  );
                }),
              )}
            </div>
          </div>

          <div className="mt-2 flex items-center justify-end gap-1.5 font-mono-code text-[9px] text-[#A1A1AA]/70">
            <span>Less</span>
            {LEVEL_STYLES.map((style, index) => (
              <span
                key={index}
                className={`size-[11px] rounded-[2px] border ${style}`}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
        <div>
          <p className="dash-eyebrow">Contribution breakdown</p>
          <div className="mt-3 space-y-2.5">
            {BREAKDOWN.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-24 font-mono-code text-[10px] text-[#A1A1AA]">
                  {item.label}
                </span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                  <span
                    className={`block h-full rounded-full ${item.color}`}
                    style={{ width: `${item.percent}%` }}
                  />
                </span>
                <span className="w-8 text-right font-mono-code text-[10px] text-[#F4F4F5]">
                  {item.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="dash-eyebrow">Top repositories</p>
          <ul className="mt-3 space-y-2">
            {TOP_REPOS.map((repo) => (
              <li
                key={repo.name}
                className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1.5"
              >
                <span className="truncate font-mono-code text-[10px] text-[#E4E4E7]">
                  {repo.name}
                </span>
                <span className="shrink-0 font-mono-code text-[9px] text-[#A1A1AA]">
                  {repo.detail}
                </span>
              </li>
            ))}
            <li className="px-1 font-mono-code text-[9px] text-[#A1A1AA]/70">
              + 37 other repositories
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
