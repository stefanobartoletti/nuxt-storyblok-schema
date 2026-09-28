<template>
  <section v-editable="blok">
    <div class="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
      <h2 v-if="blok.title" class="text-3xl font-bold">{{ blok.title }}</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard v-for="card in blok.cards" :key="card._uid" :card="card" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  blok: Content<'section-cards'>
}>()
</script>
