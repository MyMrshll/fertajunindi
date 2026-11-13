import test from "node:test";
import assert from "node:assert/strict";
import { buildDashboardStats } from "../src/lib/dashboard-stats.ts";
import {
  COLLABORATIONS,
  OTHER_REPOS,
  PROFILE,
  PROJECTS,
} from "../src/lib/projects.ts";

const stats = buildDashboardStats({
  projects: PROJECTS,
  collaborations: COLLABORATIONS,
  otherRepos: OTHER_REPOS,
  profile: PROFILE,
});

test("counts the public portfolio index from source data", () => {
  assert.equal(stats.selectedWorks, 8);
  assert.equal(stats.collaborations, 14);
  assert.equal(stats.privateCollaborations, 10);
  assert.equal(stats.publicCollaborations, 4);
  assert.equal(stats.publicRepos, 27);
  assert.equal(stats.followers, 16);
  assert.equal(stats.archiveCount, 19);
});

test("counts demo links across projects and collaborations", () => {
  assert.equal(stats.projectDemoCount, 1);
  assert.equal(stats.collaborationDemoCount, 3);
  assert.equal(stats.liveLinks, 4);
});

test("derives a deterministic stack ranking", () => {
  assert.deepEqual(stats.topStack, [
    { name: "TypeScript", count: 4 },
    { name: "Next.js", count: 2 },
    { name: "Python", count: 2 },
    { name: "React", count: 2 },
    { name: "Vite", count: 2 },
  ]);
});

test("groups indexed entries by year, newest first", () => {
  assert.deepEqual(stats.years, [
    { year: "2026", count: 18 },
    { year: "2025", count: 3 },
    { year: "2024", count: 1 },
  ]);
});
