<template>
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-xl font-semibold mb-4">Today's Meal Plan</h2>
    <div class="space-y-4">
      <div v-for="meal in mealPlan" :key="meal.type" class="border-l-4 border-green-500 pl-4">
        <h3 class="font-medium text-green-700">{{ meal.type }}</h3>
        <p class="text-gray-600">{{ meal.name }}</p>
        <span class="text-sm text-gray-500">{{ meal.calories }} cal</span>
      </div>
    </div>
    <button class="mt-4 w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">
      View Grocery List
    </button>
  </div>
</template>

<script setup>
const { currentPlan } = useMealPlanner()
const mealPlan = computed(() => currentPlan.value || [
  { type: 'Breakfast', name: 'Avocado Toast', calories: 320 },
  { type: 'Lunch', name: 'Quinoa Salad', calories: 450 },
  { type: 'Dinner', name: 'Grilled Salmon', calories: 380 }
])
</script>