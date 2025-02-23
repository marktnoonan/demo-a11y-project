<template>
  <article class="prose lg:prose-xl max-w-none">
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <p class="text-gray-600 mb-4">{{ date }}</p>
    <div v-html="content"></div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  date: string
  content: string
}>()
</script>