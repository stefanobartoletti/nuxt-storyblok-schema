import { defineBlock, defineField } from '@storyblok/schema'

import { seoMetaFields, seoMetaTab } from '../fieldGroups/seoMeta'
import { colors, folders } from '../lib'
import { sectionCards } from '../sections/cards'
import { sectionHero } from '../sections/hero'
import { sectionLatestPosts } from '../sections/latestPosts'

/** Reuses the space's default `page` content type. */
export const page = defineBlock({
  name: 'page',
  display_name: 'Page',
  is_root: true,
  is_nestable: false,
  icon: 'block-doc',
  color: colors.document,
  folder: folders.documents,
  fields: [
    seoMetaTab,
    defineField('sections', {
      type: 'bloks',
      display_name: 'Page Sections',
      description: 'Add, reorder and customize sections to build the page layout.',
      allow: [
        sectionHero,
        sectionCards,
        sectionLatestPosts,
      ],
      minimum: 1,
    }),
    ...seoMetaFields,
  ],
})
