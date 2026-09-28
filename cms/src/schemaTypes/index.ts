import type { Schema as InferSchema } from '@storyblok/schema'
import { defineSchema } from '@storyblok/schema'

import { button } from './components/button'
import { card } from './components/card'
import { navLink } from './components/navLink'
import { blogPost } from './documents/blogPost'
import { page } from './documents/page'
import { folders } from './lib'
import { sectionCards } from './sections/cards'
import { sectionHero } from './sections/hero'
import { sectionLatestPosts } from './sections/latestPosts'
import { settings } from './singletons/settings'

/** Block registry, and the entry point for `schema push`. */
export const schema = defineSchema({
  folders,
  blocks: {
    // Singletons
    settings,
    // Documents
    page,
    blogPost,
    // Sections
    sectionHero,
    sectionCards,
    sectionLatestPosts,
    // Components
    button,
    card,
    navLink,
  },
})

export type Schema = InferSchema<typeof schema>
export type Blocks = Schema['blocks']
