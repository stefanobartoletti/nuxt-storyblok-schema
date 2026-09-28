<template>
  <main v-if="story" class="flex-1">
    <StoryblokComponent :blok="story.content" />
  </main>
</template>

<script setup lang="ts">
import { ROUTABLE_DOCUMENT_TYPES } from '#shared'

const route = useRoute()
const version = useStoryblokVersion()
const slug = (route.params.slug as string[] | undefined)?.join('/') || 'home'

const { story } = await useAsyncStoryblok(slug, {
  api: { version },
})

// Only routable content types render, anything else is a 404
const isRoutable = ROUTABLE_DOCUMENT_TYPES.some(({ type }) => type === story.value?.content?.component)

if (!story.value?.content || !isRoutable) {
  throw createError({ statusCode: 404, statusMessage: 'This page can\'t be found', fatal: true })
}
</script>
