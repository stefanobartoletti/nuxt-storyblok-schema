<template>
  <section v-editable="blok" class="bg-slate-100">
    <div class="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24">
      <h1 class="text-5xl font-bold">{{ blok.title }}</h1>
      <p v-if="blok.text" class="max-w-2xl text-xl text-slate-600">{{ blok.text }}</p>
      <div v-if="blok.buttons?.length" class="flex gap-2">
        <ButtonLink v-for="button in blok.buttons" :key="button._uid" :button="button" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  blok: Content<'section-hero'>
}>()
</script>
