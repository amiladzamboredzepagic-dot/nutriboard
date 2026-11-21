import { fetchRecipes } from "@/data/api";
import type { Recipe } from "@/types";

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
