import type { BlockContent } from '@storyblok/schema'
import type { SbBlokData } from '@storyblok/vue'
import type { Blocks } from '../../cms/src/schemaTypes'

/** Delivered content of a block, derived from the schema. */
export type Content<N extends Blocks['name']> = BlockContent<
  Extract<Blocks, { name: N }>,
  Blocks
>

/** A story from a list query. */
export interface Story<T> {
  uuid: string
  name: string
  slug: string
  full_slug: string
  content: T
}

/** Type-only cast for `<StoryblokComponent>` (see README). */
export function asBlok(content: unknown): SbBlokData {
  return content as SbBlokData
}
