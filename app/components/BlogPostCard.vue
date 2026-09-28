<template>
  <NuxtLink :to="`/${post.full_slug}`" class="group">
    <article class="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition group-hover:-translate-y-1 group-hover:shadow-lg">
      <NuxtImg
        v-if="post.content.cover_image?.filename"
        :src="post.content.cover_image.filename"
        :alt="post.content.cover_image.alt || ''"
        width="600"
        loading="lazy"
        class="aspect-video w-full object-cover"
      />
      <div class="flex flex-1 flex-col gap-3 p-6">
        <time v-if="post.content.published_at" :datetime="post.content.published_at" class="text-sm text-slate-500">
          {{ useFormatDate(post.content.published_at) }}
        </time>
        <h3 class="text-xl font-semibold group-hover:underline">{{ post.content.title }}</h3>
        <p v-if="post.content.summary" class="text-slate-600">{{ post.content.summary }}</p>
        <span class="mt-auto pt-2 text-sm font-medium">Read more →</span>
      </div>
    </article>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  post: Story<Content<'blog-post'>>
}>()
</script>
