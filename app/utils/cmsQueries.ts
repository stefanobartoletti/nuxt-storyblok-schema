/** Folder for content without a page of its own. */
export const CONFIG_FOLDER = 'config'

/** The settings singleton. */
export const SETTINGS_SLUG = `${CONFIG_FOLDER}/site-config`

/** For `content_type` filters. */
export const CONTENT_TYPES = {
  page: 'page',
  blogPost: 'blog-post',
} as const
