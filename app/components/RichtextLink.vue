<template>
  <NuxtLink :to="href" :target="attrs.target || undefined" :rel="isExternal ? 'noopener noreferrer' : undefined">
    <slot></slot>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { StoryblokVueRichTextProps } from '@storyblok/vue'

/** Rich text link mark, routed like `resolveLink` (see README). */
const props = defineProps<StoryblokVueRichTextProps['link']>()

const isExternal = computed(() => props.attrs.linktype === 'url')

const href = computed(() => {
  const { linktype, href, anchor } = props.attrs

  if (linktype === 'story') {
    return storyPath(href, anchor)
  }
  if (linktype === 'email') {
    return `mailto:${(href ?? '').replace(/^mailto:/, '')}`
  }
  return href || '/'
})
</script>
