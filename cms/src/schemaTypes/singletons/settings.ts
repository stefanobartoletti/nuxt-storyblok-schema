import { defineBlock, defineField } from '@storyblok/schema'

import { navLink } from '../components/navLink'
import { colors, folders } from '../lib'

/** Site-wide settings, stored in one story at `config/site-config`. */
export const settings = defineBlock({
  name: 'settings',
  display_name: 'Site Settings',
  is_root: true,
  is_nestable: false,
  icon: 'block-resize-fc',
  color: colors.singleton,
  folder: folders.singletons,
  fields: [
    defineField('tab_header', {
      type: 'tab',
      display_name: 'Header',
      keys: ['header_nav'],
    }),
    defineField('tab_footer', {
      type: 'tab',
      display_name: 'Footer',
      keys: ['footer_nav'],
    }),
    // General
    defineField('site_title', {
      type: 'text',
      display_name: 'Site Title',
      description: 'Shown in the header and footer, and appended to every page title.',
      required: true,
    }),
    // Header
    defineField('header_nav', {
      type: 'bloks',
      display_name: 'Main Navigation',
      allow: [navLink],
    }),
    // Footer
    defineField('footer_nav', {
      type: 'bloks',
      display_name: 'Footer Navigation',
      allow: [navLink],
    }),
  ],
})
