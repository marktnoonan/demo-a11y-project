<template>
  <div class="space-y-12">
    <p class="text-4xl font-bold mb-8">Latest Posts</p>
    <div class="grid gap-8">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        v-bind="post"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = [
  {
    id: 1,
    title: 'Getting Started with Nuxt 3',
    date: 'April 3, 2024',
    content: `
      <p>Nuxt 3 is a powerful framework for building modern web applications. In this post, we'll explore its key features and benefits.</p>
      <p>Learn about the new Composition API, auto-imports, and improved performance.</p>
    `
  },
  {
    id: 2,
    title: 'Understanding TypeScript in Vue',
    date: 'April 2, 2024',
    content: `
      <p>TypeScript brings strong typing to your Vue applications. Let's dive into how to leverage TypeScript effectively in your Vue projects.</p>
      <p>We'll cover type inference, interfaces, and best practices.</p>
    `
  }
]
</script>