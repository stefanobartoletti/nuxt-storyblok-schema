import { defineBlock, defineField } from '@storyblok/schema'

import { ROUTABLE_DOCUMENT_TYPES } from '../../../../shared'
import { colors, folders } from '../lib'

export const navLink = defineBlock({
  name: 'nav-link',
  display_name: 'Nav Link',
  is_nestable: true,
  icon: 'block-arrow-pointer',
  color: colors.component,
  folder: folders.components,
  preview_field: 'label',
  fields: [
    defineField('label', {
      type: 'text',
      display_name: 'Label',
      required: true,
    }),
    defineField('link', {
      type: 'multilink',
      display_name: 'Link',
      required: true,
      restrict_content_types: true,
      component_whitelist: ROUTABLE_DOCUMENT_TYPES.map(({ type }) => type),
      allow_target_blank: true,
      show_anchor: true,
      email_link_type: true,
      asset_link_type: true,
    }),
  ],
})
