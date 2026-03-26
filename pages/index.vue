<template>
  <div class="min-h-screen bg-green-50">
    <Header />
    <main class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-green-800 mb-4">AI Meal Planner</h1>
        <p class="text-gray-600">Personalized meal plans for your lifestyle</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <MealPlanCard />
        <div class="space-y-4">
          <NutritionTracker />
          <button @click="generateMealPlan" class="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Generate New Plan
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const { generatePlan } = useMealPlanner()

const generateMealPlan = async () => {
  await generatePlan({ dietary: 'balanced', calories: 2000 })
}
</script>