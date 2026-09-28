import { defineBlock, defineField } from '@storyblok/schema'

import { colors, folders } from '../lib'
import { button } from './button'

export const card = defineBlock({
  name: 'card',
  display_name: 'Card',
  is_nestable: true,
  icon: 'block-text-img-t-l',
  color: colors.component,
  folder: folders.components,
  preview_field: 'title',
  fields: [
    defineField('title', {
      type: 'text',
      display_name: 'Title',
    }),
    defineField('text', {
      type: 'textarea',
      display_name: 'Text',
    }),
    defineField('image', {
      type: 'asset',
      display_name: 'Image',
      filetypes: ['images'],
    }),
    defineField('buttons', {
      type: 'bloks',
      display_name: 'Buttons',
      allow: [button],
      maximum: 1,
    }),
  ],
})
