import { defineBlock, defineField } from '@storyblok/schema'

import { button } from '../components/button'
import { colors, folders } from '../lib'

export const sectionLatestPosts = defineBlock({
  name: 'section-latest-posts',
  display_name: 'Latest Posts',
  description: 'Shows the most recent blog posts. Leave the limit empty to list them all, e.g. on the blog index page.',
  is_nestable: true,
  icon: 'block-doc',
  color: colors.section,
  folder: folders.sections,
  preview_field: 'title',
  fields: [
    defineField('title', {
      type: 'text',
      display_name: 'Title',
    }),
    defineField('limit', {
      type: 'number',
      display_name: 'Limit',
      description: 'How many posts to show. Leave empty to show all.',
      min_value: 1,
    }),
    defineField('buttons', {
      type: 'bloks',
      display_name: 'Buttons',
      allow: [button],
      maximum: 1,
    }),
  ],
})
