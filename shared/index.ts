// Shared by the frontend and the CMS schema

/** Content types with their own URL. */
export const ROUTABLE_DOCUMENT_TYPES = [
  { type: 'page', title: 'Page' },
  { type: 'blog-post', title: 'Blog Post' },
] as const
