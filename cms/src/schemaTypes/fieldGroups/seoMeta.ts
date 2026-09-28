import { defineField } from '@storyblok/schema'

/** SEO fields: add `seoMetaTab` and spread `seoMetaFields` into a content type. */
export const seoMetaTab = defineField('tab_seo', {
  type: 'tab',
  display_name: 'SEO',
  keys: [
    'seo_title',
    'seo_description',
    'seo_image',
  ],
})

export const seoMetaFields = [
  defineField('seo_title', {
    type: 'text',
    display_name: 'SEO Title',
    description: 'Title used for search engines and social media sharing (recommended: 50-60 characters)',
    max_length: 70,
  }),
  defineField('seo_description', {
    type: 'textarea',
    display_name: 'SEO Description',
    description: 'Description used for search engines and social media sharing (recommended: 150-160 characters)',
    max_length: 180,
  }),
  defineField('seo_image', {
    type: 'asset',
    display_name: 'Open Graph Image',
    description: 'Image used for social media sharing (recommended: 1200x630 pixels)',
    filetypes: ['images'],
  }),
] as const
