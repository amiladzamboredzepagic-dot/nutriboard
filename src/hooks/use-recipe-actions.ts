import { useState, type Dispatch, type SetStateAction } from "react";
import { Alert, Platform } from "react-native";

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
    const message = `"${recipe.title}" will be removed.`;
    const removeRecipe = () => {
      setRecipes((currentRecipes) =>
        removeRecipeById(currentRecipes, recipe.id),
      );
    };

    if (Platform.OS === "web") {
      if (
        typeof window !== "undefined" &&
        window.confirm(`Delete recipe?\n${message}`)
      ) {
        removeRecipe();
      }
      return;
    }

    Alert.alert("Delete recipe?", message, [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: removeRecipe },
    ]);
  };

  return { refreshing, refresh, confirmDelete };
}
