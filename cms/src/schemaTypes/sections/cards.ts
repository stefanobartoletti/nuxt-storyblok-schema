import { defineBlock, defineField } from '@storyblok/schema'

import { card } from '../components/card'
import { colors, folders } from '../lib'

export const sectionCards = defineBlock({
  name: 'section-cards',
  display_name: 'Cards',
  is_nestable: true,
  icon: 'block-1-2block',
  color: colors.section,
  folder: folders.sections,
  preview_field: 'title',
  fields: [
    defineField('title', {
      type: 'text',
      display_name: 'Title',
    }),
    defineField('cards', {
      type: 'bloks',
      display_name: 'Cards',
      required: true,
      allow: [card],
      minimum: 1,
    }),
  ],
})
