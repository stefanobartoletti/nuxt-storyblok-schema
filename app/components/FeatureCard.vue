<template>
  <div v-editable="card" class="flex flex-col gap-4 rounded-xl bg-slate-100 p-6">
    <NuxtImg
      v-if="card.image?.filename"
      :src="card.image.filename"
      :alt="card.image.alt || ''"
      width="600"
      loading="lazy"
      class="aspect-4/3 w-full rounded-lg object-cover"
    />
    <h3 v-if="card.title" class="text-xl font-semibold">{{ card.title }}</h3>
    <p v-if="card.text" class="text-slate-600">{{ card.text }}</p>
    <div v-if="card.buttons?.length" class="mt-auto flex gap-2 pt-2">
      <ButtonLink v-for="button in card.buttons" :key="button._uid" :button="button" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  card: Content<'card'>
}>()
</script>
