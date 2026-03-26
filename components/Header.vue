<template>
  <header class="bg-white shadow-sm border-b">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold text-green-600">🍽️ AI Meal Planner</NuxtLink>
      <div class="flex gap-6">
        <NuxtLink to="/" class="text-gray-700 hover:text-green-600">Home</NuxtLink>
        <NuxtLink to="/recipes" class="text-gray-700 hover:text-green-600">Recipes</NuxtLink>
        <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Subscribe</button>
      </div>
    </nav>
  </header>
</template>