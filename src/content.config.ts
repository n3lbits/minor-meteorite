// Import the glob loader
import { glob, file } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";


// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string().optional(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }).optional(),
      tags: z.array(z.string()),
      draft: z.boolean().default(false).optional(),
      type: z.literal("blog").default("blog"),
      series: z.string().optional(),
    })
});

const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    author: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false).optional(),
    type: z.literal("notes").default("notes"),
  })
});

const projects = defineCollection({
	loader: glob({
		base: "./src/content/projects",
		pattern: "**/*.{md, mdx}",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			tagline: z.string().optional(),
			featured: z.boolean().optional(),
			indexCover: z.preprocess(() => "./cover.png", image()).optional(),
			indexCoverAlt: z.string().optional(),
			external_url: z.string().url().optional(),
			projectType: z.union([z.literal("game"), z.literal("site"), z.literal("software")]),
			type: z.literal("project").default("project"),
		}),
});

const wiki = defineCollection({
	loader: glob({
		base: "./src/content/wiki",
		pattern: "**/*.{md, mdx, mdoc}",
	}),
	schema: z.object({
		title: z.string(),
		tagline: z.string().optional(),
		maxDepthTOC: z.number().optional(),
		navigation: z.object({
			label: z.string().optional(),
			category: z.string(),
			hidden: z.boolean().optional(),
			order: z.number().optional().default(0),
		}),
		type: z.literal("wiki").default("wiki"),
	}),
});

const quotes = defineCollection({
  loader: file("src/data/quotes.json"),
  schema: z.object({
    quote: z.string(),
    source: z.string(),
    type: z.literal("quote").default("quote"),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog, notes, projects, wiki, quotes };
