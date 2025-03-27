import type { CollectionEntry } from "astro:content";
export { monthYearDate, readableDate } from "./dateTools";

export function getURLFromEntry(
	item: CollectionEntry<"blog"> | CollectionEntry<"projects"> | CollectionEntry<"notes">,
): string {
	switch (item.data.type) {
		case "blog":
			return `/posts/${item.id}`;
		case "project":
			return `/projects/${item.data.projectType}/${item.id}`;
      case "notes":
			return `/notes/${item.id}`;
		default:
			return "ERROR!";
	}
}

export const isAbsolute = (url: string) =>
  url.indexOf('http://') === 0 || url.indexOf('https://') === 0

export const generateItemId = (base: string) =>
  (base + Math.random().toString(16).slice(2)).replaceAll(' ', '').toLowerCase()

export function getBaseSiteURL(): string {
	return import.meta.env.PROD ? "https://example.com/" : "http://localhost:4321/";
}

export function randomArrayEntry<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)] as T;
}

export const blogDateSort = (a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) =>
	b.data.pubDate.getTime() - a.data.pubDate.getTime();
export const blogFilter = (entry: CollectionEntry<"blog">) => {
	if (import.meta.env.DEV) {
		return true;
  }

	return !entry.data.draft;
}
