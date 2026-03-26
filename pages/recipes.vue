<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <main class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Recipe Database</h1>
      <div class="mb-6">
        <input v-model="searchQuery" placeholder="Search recipes..." class="w-full px-4 py-2 border rounded-lg">
        <div class="flex gap-2 mt-4">
          <button v-for="filter in filters" :key="filter" @click="activeFilter = filter" 
                  :class="activeFilter === filter ? 'bg-green-600 text-white' : 'bg-white text-gray-700'" 
                  class="px-4 py-2 rounded-lg border">
            {{ filter }}
          </button>
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="recipe in filteredRecipes" :key="recipe.id" class="bg-white p-4 rounded-lg shadow">
          <h3 class="font-semibold mb-2">{{ recipe.name }}</h3>
          <p class="text-sm text-gray-600">{{ recipe.calories }} cal | {{ recipe.time }} min</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const activeFilter = ref('all')
const filters = ['all', 'vegetarian', 'keto', 'gluten-free']
const { recipes } = useMealPlanner()

const filteredRecipes = computed(() => {
  return recipes.value.filter(r => 
    (activeFilter.value === 'all' || r.dietary.includes(activeFilter.value)) &&
    r.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>