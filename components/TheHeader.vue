<template>
  <header class="bg-gray-800 text-white">
    <nav class="container mx-auto px-4 py-6">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold">Tech Blog</NuxtLink>
        <div class="space-x-6">
          <NuxtLink to="/" class="hover:text-gray-300">Blog</NuxtLink>
          <NuxtLink to="/about" class="hover:text-gray-300">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-gray-300">Contact</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>