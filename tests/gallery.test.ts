import test from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import path from "path";
import { GALLERY_ITEMS, getGalleryStats } from "../src/lib/gallery.ts";

const VALID_COLLECTIONS = ["awards", "craft", "portrait"];
const VALID_ASPECTS = [
  "portrait",
  "poster",
  "square",
  "landscape",
  "photo",
  "wide",
  "banner",
];

test("validates the curated gallery dataset", () => {
  assert.ok(GALLERY_ITEMS.length >= 10, "should have at least 10 curated frames");
  const ids = new Set<string>();
  const sources = new Set<string>();
  for (const item of GALLERY_ITEMS) {
    assert.ok(item.id, "gallery item must have an id");
    assert.ok(!ids.has(item.id), `duplicate gallery id: ${item.id}`);
    ids.add(item.id);
    assert.ok(item.src.startsWith("/"), "gallery src must be an absolute public path");
    assert.ok(!sources.has(item.src), `duplicate gallery src: ${item.src}`);
    sources.add(item.src);
    assert.ok(item.title, "gallery item must have a title");
    assert.ok(item.caption, "gallery item must have a caption");
    assert.ok(VALID_COLLECTIONS.includes(item.collection), `bad collection: ${item.collection}`);
    assert.ok(VALID_ASPECTS.includes(item.aspect), `bad aspect: ${item.aspect}`);
    assert.ok(Array.isArray(item.tags) && item.tags.length > 0, "gallery item must have tags");
  }
});

test("calculates gallery statistics", () => {
  const stats = getGalleryStats(GALLERY_ITEMS);
  assert.equal(stats.total, GALLERY_ITEMS.length);
  assert.equal(stats.collections, 3);
  assert.equal(stats.byCollection.awards, 2);
  assert.equal(stats.byCollection.craft, 6);
  assert.equal(stats.byCollection.portrait, 2);
});

test("every gallery asset exists in public", () => {
  for (const item of GALLERY_ITEMS) {
    const diskPath = path.resolve(process.cwd(), "public", item.src.replace(/^\//, ""));
    assert.ok(fs.existsSync(diskPath), `missing gallery asset: ${diskPath}`);
    assert.ok(fs.statSync(diskPath).size > 0, `empty gallery asset: ${diskPath}`);
  }
});
