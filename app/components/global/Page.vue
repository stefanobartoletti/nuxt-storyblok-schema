<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="section in blok.sections || []"
      :key="section._uid"
      :blok="asBlok(section)"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  blok: Content<'page'>
}>()

useSeoMeta({
  title: () => props.blok.seo_title || undefined,
  description: () => props.blok.seo_description || undefined,
  ogImage: () => props.blok.seo_image?.filename || undefined,
})
</script>
