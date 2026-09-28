/** The settings story, fetched once per request. */
export async function useSettings() {
  const storyblokApi = useStoryblokApi()
  const version = useStoryblokVersion()

  const { data: settings } = await useAsyncData('site-settings', async () => {
    const { data } = await storyblokApi.get(`cdn/stories/${SETTINGS_SLUG}`, {
      version,
    })
    return data.story.content as Content<'settings'>
  }, { default: () => null })

  return { settings }
}
