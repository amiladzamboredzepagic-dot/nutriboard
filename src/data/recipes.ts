import { Recipe } from "@/types";

export const MOCK_RECIPES: Recipe[] = [
  {
    id: "rec-1",
    title: "Green Goddess Quinoa Bowl",
    shortDescription:
      "A crisp, nutrient-dense lunch loaded with fresh herbs and healthy fats.",
    ingredients: [
      "1 cup cooked quinoa",
      "1 ripe avocado, sliced",
      "1/2 cup steamed edamame",
      "1/2 English cucumber, diced",
      "2 tbsp homemade basil-tahini dressing",
    ],
    preparationSteps: [
      { id: "step-1", description: "Base your bowl with warm cooked quinoa." },
      {
        id: "step-2",
        description:
          "Arrange avocado slices, edamame, and cucumber neatly on top.",
      },
      {
        id: "step-3",
        description:
          "Drizzle generously with basil-tahini dressing before serving.",
      },
    ],
    prepTimeMinutes: 15,
    servings: 1,
    mealType: "Lunch",
    dishImageUri:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rec-2",
    title: "Overnight Berry Chia Pudding",
    shortDescription:
      "Make-ahead creamy chia bowl topped with fresh seasonal berries and honey.",
    ingredients: [
      "3 tbsp chia seeds",
      "1 cup unsweetened almond milk",
      "1 tbsp maple syrup or honey",
      "1/2 cup fresh raspberries and blueberries",
      "1 tbsp sliced almonds",
    ],
    preparationSteps: [
      {
        id: "step-1",
        description:
          "Whisk chia seeds, almond milk, and maple syrup together in a mason jar.",
      },
      {
        id: "step-2",
        description:
          "Let rest for 10 minutes, whisk again to break up clumps, then cover and refrigerate overnight.",
      },
      {
        id: "step-3",
        description:
          "Top with berries and toasted almond slices before eating.",
      },
    ],
    prepTimeMinutes: 10,
    servings: 1,
    mealType: "Breakfast",
    dishImageUri:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rec-3",
    title: "Sheet Pan Lemon Herb Salmon",
    shortDescription:
      "Flaky salmon fillet baked with tender asparagus and lemon slices in under 20 minutes.",
    ingredients: [
      "2 wild-caught salmon fillets (6 oz each)",
      "1 bunch asparagus, woody ends trimmed",
      "2 tbsp extra virgin olive oil",
      "2 cloves garlic, minced",
      "1 lemon, sliced",
      "Salt and black pepper to taste",
    ],
    preparationSteps: [
      {
        id: "step-1",
        description:
          "Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.",
      },
      {
        id: "step-2",
        description:
          "Place salmon fillets and asparagus on the sheet; drizzle with olive oil, minced garlic, salt, and pepper.",
      },
      {
        id: "step-3",
        description:
          "Top salmon with lemon slices and bake for 12–15 minutes until salmon flakes easily with a fork.",
      },
    ],
    prepTimeMinutes: 20,
    servings: 2,
    mealType: "Dinner",
    dishImageUri:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rec-4",
    title: "Spicy Roasted Chickpeas",
    shortDescription:
      "Crunchy, high-protein roasted snack seasoned with smoked paprika and cayenne.",
    ingredients: [
      "1 can (15 oz) chickpeas, rinsed and thoroughly dried",
      "1 tbsp olive oil",
      "1/2 tsp smoked paprika",
      "1/4 tsp cayenne pepper",
      "1/2 tsp garlic powder",
      "1/2 tsp sea salt",
    ],
    preparationSteps: [
      {
        id: "step-1",
        description:
          "Preheat oven to 400°F (200°C). Roll chickpeas dry between paper towels to remove moisture.",
      },
      {
        id: "step-2",
        description:
          "Toss chickpeas in olive oil, paprika, cayenne, garlic powder, and salt until evenly coated.",
      },
      {
        id: "step-3",
        description:
          "Spread evenly on a baking tray and roast for 25–30 minutes, shaking the tray halfway through, until crispy.",
      },
    ],
    prepTimeMinutes: 35,
    servings: 3,
    mealType: "Snack",
    dishImageUri:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rec-5",
    title: "Classic Avocado & Egg Toast",
    shortDescription:
      "Toasted sourdough bread topped with mashed avocado, soft-boiled egg, and chili flakes.",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 large eggs",
      "1 tsp lemon juice",
      "Red pepper flakes and flaky sea salt",
    ],
    preparationSteps: [
      {
        id: "step-1",
        description:
          "Boil eggs for 6.5 minutes for a jammy yolk, then transfer to an ice bath and peel.",
      },
      {
        id: "step-2",
        description:
          "Mash avocado with lemon juice and a pinch of salt in a small bowl.",
      },
      {
        id: "step-3",
        description:
          "Toast sourdough slices, spread avocado mash on top, layer halved soft-boiled eggs, and sprinkle red pepper flakes.",
      },
    ],
    prepTimeMinutes: 12,
    servings: 2,
    mealType: "Breakfast",
    dishImageUri:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
  },
];
