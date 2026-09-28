import { defineBlock, defineField } from '@storyblok/schema'

import { ROUTABLE_DOCUMENT_TYPES } from '../../../../shared'
import { colors, folders } from '../lib'

/** Rendered by `ButtonLink.vue`, not `<StoryblokComponent>` (see README). */
export const button = defineBlock({
  name: 'button',
  display_name: 'Button',
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
      // Only content types with their own URL may be linked to
      restrict_content_types: true,
      component_whitelist: ROUTABLE_DOCUMENT_TYPES.map(({ type }) => type),
      allow_target_blank: true,
      show_anchor: true,
      email_link_type: true,
      asset_link_type: true,
    }),
    defineField('variant', {
      type: 'option',
      display_name: 'Variant',
      default_value: 'solid',
      exclude_empty_option: true,
      options: [
        { name: 'Solid', value: 'solid' },
        { name: 'Outline', value: 'outline' },
      ],
    }),
  ],
})
