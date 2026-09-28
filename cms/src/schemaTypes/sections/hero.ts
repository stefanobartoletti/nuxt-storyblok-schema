import { defineBlock, defineField } from '@storyblok/schema'

import { button } from '../components/button'
import { colors, folders } from '../lib'

export const sectionHero = defineBlock({
  name: 'section-hero',
  display_name: 'Hero',
  is_nestable: true,
  icon: 'block-monitor',
  color: colors.section,
  folder: folders.sections,
  preview_field: 'title',
  fields: [
    defineField('title', {
      type: 'text',
      display_name: 'Title',
      required: true,
    }),
    defineField('text', {
      type: 'textarea',
      display_name: 'Text',
    }),
    defineField('buttons', {
      type: 'bloks',
      display_name: 'Buttons',
      // `allow` also types the field (see README)
      allow: [button],
      maximum: 2,
    }),
  ],
})
