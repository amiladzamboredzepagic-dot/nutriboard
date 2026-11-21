import { fetchRecipes } from "@/data/api";
import type { Recipe, RecipeFilter, RecipeSortOrder } from "@/types";

export type RecipeSummary = {
  recipeCount: number;
  totalPrepMinutes: number;
  maxServings: number;
};

export type RecipeLoadResult =
  | { status: "ready"; recipes: Recipe[] }
  | { status: "error" };

export async function loadRecipes(
  options: { fail?: boolean } = {},
): Promise<RecipeLoadResult> {
  try {
    const recipes = await fetchRecipes(options);
    return { status: "ready", recipes };
  } catch {
    return { status: "error" };
  }
}

export function getRecipeSummary(recipes: Recipe[]): RecipeSummary {
  return {
    recipeCount: recipes.length,
    totalPrepMinutes: recipes.reduce(
      (total, recipe) => total + recipe.prepTimeMinutes,
      0,
    ),
    maxServings: recipes.reduce(
      (maximum, recipe) => Math.max(maximum, recipe.servings),
      0,
    ),
  };
}

export function filterRecipes(
  recipes: Recipe[],
  filter: RecipeFilter,
): Recipe[] {
  return filter === "all"
    ? recipes
    : recipes.filter((recipe) => recipe.mealType === filter);
}

export function sortRecipes(
  recipes: Recipe[],
  order: RecipeSortOrder,
): Recipe[] {
  return [...recipes].sort((a, b) =>
    order === "newest"
      ? Date.parse(b.createdAt) - Date.parse(a.createdAt)
      : b.prepTimeMinutes - a.prepTimeMinutes,
  );
}

export function removeRecipeById(
  recipes: Recipe[],
  recipeId: string,
): Recipe[] {
  return recipes.filter((recipe) => recipe.id !== recipeId);
}
