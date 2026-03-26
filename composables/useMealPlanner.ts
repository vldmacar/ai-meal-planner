export const useMealPlanner = () => {
  const currentPlan = ref(null)
  const recipes = ref([
    { id: 1, name: 'Avocado Toast', calories: 320, time: 10, dietary: ['vegetarian'] },
    { id: 2, name: 'Grilled Chicken', calories: 380, time: 25, dietary: ['keto'] },
    { id: 3, name: 'Quinoa Salad', calories: 450, time: 15, dietary: ['vegetarian', 'gluten-free'] },
    { id: 4, name: 'Salmon Bowl', calories: 520, time: 20, dietary: ['keto', 'gluten-free'] }
  ])

  const generatePlan = async (preferences: any) => {
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 1000))
    currentPlan.value = [
      { type: 'Breakfast', name: 'Oatmeal Bowl', calories: 300 },
      { type: 'Lunch', name: 'Chicken Salad', calories: 420 },
      { type: 'Dinner', name: 'Fish & Vegetables', calories: 480 }
    ]
  }

  const generateGroceryList = () => {
    return ['Avocado', 'Bread', 'Chicken', 'Quinoa', 'Salmon', 'Mixed Greens']
  }

  return {
    currentPlan: readonly(currentPlan),
    recipes: readonly(recipes),
    generatePlan,
    generateGroceryList
  }
}