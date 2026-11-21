import type { Recipe } from "@/types";
import { MOCK_RECIPES } from "./recipes";

const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export async function fetchRecipes(
  options: { fail?: boolean } = {},
): Promise<Recipe[]> {
  await wait(800);

  if (options.fail) {
    throw new Error("Could not load recipes");
  }

  return MOCK_RECIPES;
}

export function getRecipe(id: string): Recipe | undefined {
  return MOCK_RECIPES.find((recipe) => recipe.id === id);
}
