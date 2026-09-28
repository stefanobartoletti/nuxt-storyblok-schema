<template>
  <section v-editable="blok">
    <div class="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
      <h2 v-if="blok.title" class="text-3xl font-bold">{{ blok.title }}</h2>
      <div v-if="posts.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BlogPostCard v-for="post in posts" :key="post.uuid" :post="post" />
      </div>
      <p v-else>No posts found.</p>
      <div v-if="blok.buttons?.length" class="flex gap-2">
        <ButtonLink v-for="button in blok.buttons" :key="button._uid" :button="button" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  blok: Content<'section-latest-posts'>
}>()

const storyblokApi = useStoryblokApi()
const version = useStoryblokVersion()

// Unique key per section
const { data: posts } = await useAsyncData(
  `latest-posts-${props.blok._uid}`,
  async () => {
    const { data } = await storyblokApi.get('cdn/stories', {
      version,
      content_type: CONTENT_TYPES.blogPost,
      sort_by: 'content.published_at:desc',
      per_page: Number(props.blok.limit) || 100,
      // Skip the rich text body
      excluding_fields: 'content',
    })
    return data.stories as Story<Content<'blog-post'>>[]
  },
  { default: () => [] },
)
</script>
