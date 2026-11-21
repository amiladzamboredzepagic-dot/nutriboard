import { useState, type Dispatch, type SetStateAction } from "react";

import { fetchRecipes } from "@/data/api";
import { removeRecipeById } from "@/utils/recipes";
import type { Recipe } from "@/types";

export type RecipeLoadStatus = "loading" | "error" | "ready";

type UseRecipeActionsOptions = {
  hasRecipes: boolean;
  setRecipes: Dispatch<SetStateAction<Recipe[]>>;
  setStatus: Dispatch<SetStateAction<RecipeLoadStatus>>;
};

export function useRecipeActions({
  hasRecipes,
  setRecipes,
  setStatus,
}: UseRecipeActionsOptions) {
  const [refreshing, setRefreshing] = useState(false);
  const [pendingDeleteRecipe, setPendingDeleteRecipe] =
    useState<Recipe | null>(null);

  const refresh = async () => {
    setRefreshing(true);
    try {
      const refreshedRecipes = await fetchRecipes();
      setRecipes(refreshedRecipes);
      setStatus("ready");
    } catch (error) {
      console.error("Could not refresh recipes", error);
      if (!hasRecipes) {
        setStatus("error");
      }
    } finally {
      setRefreshing(false);
    }
  };

  const confirmDelete = (recipe: Recipe) => {
    setPendingDeleteRecipe(recipe);
  };

  const cancelDelete = () => {
    setPendingDeleteRecipe(null);
  };

  const deleteRecipe = (recipe: Recipe) => {
    setRecipes((currentRecipes) =>
      removeRecipeById(currentRecipes, recipe.id),
    );
    cancelDelete();
  };

  return {
    refreshing,
    refresh,
    confirmDelete,
    pendingDeleteRecipe,
    cancelDelete,
    deleteRecipe,
  };
}
