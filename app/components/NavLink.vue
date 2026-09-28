<template>
  <NuxtLink
    v-editable="navLink"
    :to="resolveLink(navLink.link)"
    :target="navLink.link?.target || undefined"
    :rel="navLink.link?.target === '_blank' ? 'noopener noreferrer' : undefined"
  >
    {{ navLink.label }}
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  navLink: Content<'nav-link'>
}>()
</script>
