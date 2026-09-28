<template>
  <NuxtLink
    v-editable="button"
    :to="resolveLink(button.link)"
    :target="button.link?.target || undefined"
    :rel="button.link?.linktype === 'url' ? 'noopener noreferrer' : undefined"
    class="inline-block rounded border-2 border-slate-900 px-4 py-2 font-medium"
    :class="button.variant === 'outline' ? 'text-slate-900' : 'bg-slate-900 text-white'"
  >
    {{ button.label }}
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  button: Content<'button'>
}>()
</script>
