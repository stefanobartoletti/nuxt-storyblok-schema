<template>
  <article v-editable="blok" class="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
    <header class="flex flex-col gap-4">
      <time :datetime="blok.published_at" class="text-sm text-slate-500">{{ useFormatDate(blok.published_at) }}</time>
      <h1 class="text-4xl font-bold">{{ blok.title }}</h1>
      <p class="text-lg text-slate-600">{{ blok.summary }}</p>
    </header>

    <NuxtImg
      v-if="blok.cover_image?.filename"
      :src="blok.cover_image.filename"
      :alt="blok.cover_image.alt || ''"
      width="1200"
      class="aspect-video w-full rounded object-cover"
    />

    <div class="prose max-w-none">
      <StoryblokRichText :document="blok.content" :components="richtextComponents" />
    </div>
  </article>
</template>

<script lang="ts" setup>
const props = defineProps<{
  blok: Content<'blog-post'>
}>()

useSeoMeta({
  title: () => props.blok.seo_title || props.blok.title,
  description: () => props.blok.seo_description || props.blok.summary,
  ogImage: () => props.blok.seo_image?.filename || props.blok.cover_image?.filename || undefined,
  ogType: 'article',
})
</script>
