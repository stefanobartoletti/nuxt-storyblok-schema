<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { settings } = await useSettings()

useHead({
  htmlAttrs: { lang: 'en' },
  titleTemplate: (title) => {
    const siteTitle = settings.value?.site_title
    if (!title) {
      return siteTitle || null
    }
    return siteTitle ? `${title} | ${siteTitle}` : title
  },
})
</script>
