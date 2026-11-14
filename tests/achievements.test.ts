import test from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import path from "path";
import { ACHIEVEMENTS, getAchievementStats } from "../src/lib/achievements.ts";

test("validates achievement dataset and structure", () => {
  assert.ok(ACHIEVEMENTS.length >= 9, "should have at least 9 verified achievements");
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
  assert.ok(stats.competitions >= 3, "should include at least 3 hackathons/competitions");
  assert.ok(stats.goldMedals >= 2, "should have at least 2 gold medals");
  assert.ok(stats.bronzeMedals >= 1, "should have at least 1 bronze medal");
  assert.ok(stats.certifications >= 1, "should have at least 1 certification");
});

test("contains verified national hackathon INFEST XII", () => {
  const infest = ACHIEVEMENTS.find((a) => a.id === "infest-xii-hackathon-2026");
  assert.ok(infest, "INFEST XII achievement must exist");
  assert.equal(infest?.rank, "1st Place");
  assert.equal(infest?.medalVariant, "gold");
  assert.ok(infest?.link?.includes("fst.uin.ar-raniry.ac.id"), "must link to verified press");
});

test("contains verified national KST PTKI II 2026", () => {
  const kst = ACHIEVEMENTS.find((a) => a.id === "kst-ptki-ii-2026");
  assert.ok(kst, "KST PTKI II achievement must exist");
  assert.equal(kst?.rank, "1st Place");
  assert.equal(kst?.medalVariant, "gold");
  assert.ok(kst?.link?.includes("fst.uin.ar-raniry.ac.id"), "must link to verified press");
});

test("contains verified INFEST Hackathon 2025 with photo", () => {
  const hack2025 = ACHIEVEMENTS.find((a) => a.id === "infest-hackathon-2025");
  assert.ok(hack2025, "INFEST Hackathon 2025 achievement must exist");
  assert.equal(hack2025?.rank, "3rd Place");
  assert.equal(hack2025?.medalVariant, "bronze");
  assert.ok(hack2025?.image, "must have image");

  if (hack2025?.image) {
    const imageDiskPath = path.resolve(process.cwd(), "public", hack2025.image.replace(/^\//, ""));
    assert.ok(fs.existsSync(imageDiskPath), `image file must exist at ${imageDiskPath}`);
  }
});

test("pixel medal assets exist in public/images/icons", () => {
  const icons = [
    "pixel-medal-gold.svg",
    "pixel-medal-silver.svg",
    "pixel-medal-bronze.svg",
    "pixel-trophy.svg",
  ];
  for (const icon of icons) {
    const iconPath = path.resolve(process.cwd(), "public/images/icons", icon);
    assert.ok(fs.existsSync(iconPath), `icon file must exist at ${iconPath}`);
  }
});
