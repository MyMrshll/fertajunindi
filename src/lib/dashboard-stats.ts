import type { Collaboration, Project, RepoSummary } from "./projects";

export interface DashboardSource {
  projects: Project[];
  collaborations: Collaboration[];
  otherRepos: RepoSummary[];
  profile: {
    publicRepos: number;
    followers: number;
  };
}

export interface DashboardStats {
  selectedWorks: number;
  collaborations: number;
  privateCollaborations: number;
  publicCollaborations: number;
  publicRepos: number;
  followers: number;
  archiveCount: number;
  projectDemoCount: number;
  collaborationDemoCount: number;
  liveLinks: number;
  topStack: Array<{ name: string; count: number }>;
  years: Array<{ year: string; count: number }>;
}

export function buildDashboardStats({
  projects,
  collaborations,
  otherRepos,
  profile,
}: DashboardSource): DashboardStats {
  const privateCollaborations = collaborations.filter(
    (item) => item.visibility === "private",
  ).length;
  const publicCollaborations = collaborations.length - privateCollaborations;

  const projectDemoCount = projects.filter((project) => Boolean(project.demo)).length;
  const collaborationDemoCount = collaborations.filter(
    (item) => Boolean(item.demo),
  ).length;

  const stack = new Map<string, number>();
  for (const project of projects) {
    for (const tag of project.tags ?? []) {
      stack.set(tag, (stack.get(tag) ?? 0) + 1);
    }
  }

  const topStack = [...stack.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    .slice(0, 5);

  const years = new Map<string, number>();
  for (const item of [...projects, ...collaborations]) {
    const year = item.year ?? "Unknown";
    years.set(year, (years.get(year) ?? 0) + 1);
  }

  const sortedYears = [...years.entries()]
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => b.year.localeCompare(a.year));

  return {
    selectedWorks: projects.length,
    collaborations: collaborations.length,
    privateCollaborations,
    publicCollaborations,
    publicRepos: profile.publicRepos,
    followers: profile.followers,
    archiveCount: otherRepos.length,
    projectDemoCount,
    collaborationDemoCount,
    liveLinks: projectDemoCount + collaborationDemoCount,
    topStack,
    years: sortedYears,
  };
}
