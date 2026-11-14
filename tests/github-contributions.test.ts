import test from "node:test";
import assert from "node:assert/strict";
import raw from "../src/lib/github-contrib-data.json" with { type: "json" };

test("github contribution data covers one full year", () => {
  assert.equal(raw.levels.length, 364);
  assert.equal(raw.counts.length, 364);
  assert.equal(raw.start, "2025-11-16");
});

test("github contribution totals are consistent", () => {
  const sum = raw.counts.reduce((total, value) => total + value, 0);
  assert.equal(sum, raw.total);
  assert.equal(raw.total, 634);
});

test("every contribution level stays within github buckets", () => {
  for (const level of raw.levels) {
    assert.ok(level >= 0 && level <= 4, `unexpected level ${level}`);
  }
});

test("day counts map to the expected github level buckets", () => {
  raw.counts.forEach((count, index) => {
    const level = raw.levels[index];
    if (count === 0) assert.equal(level, 0);
    else if (count <= 2) assert.ok(level >= 1, `day ${index}`);
    else if (count <= 4) assert.ok(level >= 2, `day ${index}`);
    else if (count <= 7) assert.ok(level >= 3, `day ${index}`);
    else assert.equal(level, 4, `day ${index}`);
  });
});

test("heatmap has active days across the sprint window", () => {
  const activeDays = raw.counts.filter((count) => count > 0).length;
  assert.ok(activeDays >= 150, `only ${activeDays} active days`);
  assert.ok(activeDays <= 300, `too many active days: ${activeDays}`);
});
