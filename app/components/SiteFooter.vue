<template>
  <footer class="bg-slate-900 text-slate-300">
    <div class="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 md:flex-row md:justify-between">
      <span class="font-bold text-white">{{ settings?.site_title }}</span>

      <ul v-if="settings?.footer_nav?.length" class="flex flex-col gap-2">
        <li v-for="link in settings.footer_nav" :key="link._uid">
          <NavLink :nav-link="link" class="hover:text-white" />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { settings } = await useSettings()
</script>
