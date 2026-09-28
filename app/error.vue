<template>
  <NuxtLayout>
    <main class="mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <p class="text-6xl font-bold">{{ error?.status }}</p>
      <p class="text-xl">{{ error?.message }}</p>
      <button class="mt-4 rounded bg-slate-900 px-4 py-2 text-white" @click="clearError({ redirect: '/' })">
        Go to homepage
      </button>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
const error = useError()
</script>
