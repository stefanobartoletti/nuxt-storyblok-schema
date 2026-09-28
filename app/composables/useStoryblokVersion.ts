/** Content version to request. Call at the top of setup, not after an `await`. */
export const useStoryblokVersion = () =>
  useRuntimeConfig().public.storyblokVersion as 'draft' | 'published'
