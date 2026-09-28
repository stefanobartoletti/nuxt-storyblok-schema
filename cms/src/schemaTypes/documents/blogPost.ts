import { defineBlock, defineField } from '@storyblok/schema'

import { seoMetaFields, seoMetaTab } from '../fieldGroups/seoMeta'
import { colors, folders, richTextToolbar } from '../lib'

export const blogPost = defineBlock({
  name: 'blog-post',
  display_name: 'Blog Post',
  is_root: true,
  is_nestable: false,
  icon: 'block-doc',
  color: colors.document,
  folder: folders.documents,
  preview_field: 'title',
  fields: [
    defineField('tab_meta', {
      type: 'tab',
      display_name: 'Metadata',
      keys: ['cover_image', 'published_at', 'summary'],
    }),
    seoMetaTab,
    // Main content
    defineField('title', {
      type: 'text',
      display_name: 'Title',
      required: true,
    }),
    defineField('content', {
      type: 'richtext',
      display_name: 'Content',
      required: true,
      customize_toolbar: true,
      toolbar: [...richTextToolbar],
    }),
    // Metadata
    defineField('cover_image', {
      type: 'asset',
      display_name: 'Cover Image',
      filetypes: ['images'],
      required: true,
    }),
    defineField('published_at', {
      type: 'datetime',
      display_name: 'Publication Date',
      required: true,
      disable_time: true,
    }),
    defineField('summary', {
      type: 'textarea',
      display_name: 'Summary',
      description: 'A short excerpt used in listings and previews.',
      required: true,
      max_length: 200,
    }),
    // SEO
    ...seoMetaFields,
  ],
})
