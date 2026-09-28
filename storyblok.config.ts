import { defineConfig } from 'storyblok/config'

/** Storyblok CLI config. The CLI loads `.env` itself. */
export default defineConfig({
  space: process.env.STORYBLOK_SPACE_ID,
})
