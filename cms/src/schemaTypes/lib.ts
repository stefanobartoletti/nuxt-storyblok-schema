import { defineFolder } from '@storyblok/schema'

/** Block folders, mirroring this directory layout. */
export const folders = {
  documents: defineFolder({ name: 'Documents' }),
  sections: defineFolder({ name: 'Sections' }),
  components: defineFolder({ name: 'Components' }),
  singletons: defineFolder({ name: 'Singletons' }),
}

/** Icon colours per block category. */
export const colors = {
  document: '#F5A528',
  section: '#4FA88B',
  component: '#9E7BD8',
  singleton: '#6B7280',
}

/** Rich text toolbar. No h1, it's reserved for the title. */
export const richTextToolbar = [
  'bold',
  'italic',
  'underline',
  'code',
  'link',
  'image',
  'h2',
  'h3',
  'h4',
  'list',
  'olist',
  'quote',
  'hrule',
  'undo',
  'redo',
] as const
