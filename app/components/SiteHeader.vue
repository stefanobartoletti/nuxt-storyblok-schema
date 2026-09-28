<template>
  <header class="border-b border-slate-200">
    <nav class="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
      <NuxtLink to="/" class="font-bold">{{ settings?.site_title || 'Home' }}</NuxtLink>

      <ul v-if="settings?.header_nav?.length" class="flex flex-wrap gap-4">
        <li v-for="link in settings.header_nav" :key="link._uid">
          <NavLink :nav-link="link" exact-active-class="underline" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { settings } = await useSettings()
</script>
