import test from "node:test";
import assert from "node:assert/strict";
import { ACHIEVEMENTS, getAchievementStats } from "../src/lib/achievements.ts";

test("validates achievement dataset and structure", () => {
  assert.ok(ACHIEVEMENTS.length >= 7, "should have at least 7 verified achievements");
  for (const item of ACHIEVEMENTS) {
    assert.ok(item.id, "achievement must have an id");
    assert.ok(item.title, "achievement must have a title");
    assert.ok(item.category, "achievement must have a category");
    assert.ok(item.issuer, "achievement must have an issuer");
    assert.ok(item.year, "achievement must have a year");
    assert.ok(item.description, "achievement must have a description");
    assert.ok(Array.isArray(item.tags) && item.tags.length > 0, "achievement must have tags");
  }
});

test("calculates achievement statistics correctly", () => {
  const stats = getAchievementStats(ACHIEVEMENTS);
  assert.equal(stats.total, ACHIEVEMENTS.length);
  assert.ok(stats.competitions >= 2, "should include at least 2 hackathons");
  assert.ok(stats.goldMedals >= 1, "should have at least 1 gold medal");
  assert.ok(stats.certifications >= 1, "should have at least 1 certification");
});

test("contains verified national hackathon INFEST XII", () => {
  const infest = ACHIEVEMENTS.find((a) => a.id === "infest-xii-hackathon-2026");
  assert.ok(infest, "INFEST XII achievement must exist");
  assert.equal(infest?.rank, "1st Place");
  assert.ok(infest?.link?.includes("fst.uin.ar-raniry.ac.id"), "must link to verified press");
});
