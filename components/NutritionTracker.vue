<template>
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-xl font-semibold mb-4">Nutrition Today</h2>
    <div class="space-y-3">
      <div v-for="nutrient in nutrients" :key="nutrient.name" class="flex justify-between items-center">
        <span class="text-gray-600">{{ nutrient.name }}</span>
        <div class="flex items-center gap-2">
          <div class="w-24 bg-gray-200 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" :style="{ width: `${nutrient.percentage}%` }"></div>
          </div>
          <span class="text-sm font-medium">{{ nutrient.current }}/{{ nutrient.target }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const nutrients = ref([
  { name: 'Calories', current: 1150, target: 2000, percentage: 57 },
  { name: 'Protein', current: 45, target: 120, percentage: 38 },
  { name: 'Carbs', current: 140, target: 250, percentage: 56 },
  { name: 'Fat', current: 38, target: 67, percentage: 57 }
])
</script>