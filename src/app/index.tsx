import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import {
  useRecipeActions,
  type RecipeLoadStatus,
} from "@/hooks/use-recipe-actions";
import { useRouter } from "expo-router";
import {
  filterRecipes,
  getRecipeSummary,
  loadRecipes,
  sortRecipes,
} from "@/utils/recipes";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { Recipe, RecipeFilter, RecipeSortOrder } from "@/types";
import { RecipeCard } from "../components/RecipeCard";
import { DeleteRecipeModal } from "../components/DeleteRecipeModal";
import { RecipeListFeedback } from "../components/RecipeListFeedback";
import { RecipeListHeader } from "../components/RecipeListHeader";

export default function HomeScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [status, setStatus] = useState<RecipeLoadStatus>("loading");
  const [attempt, setAttempt] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<RecipeFilter>("all");
  const [selectedSort, setSelectedSort] =
    useState<RecipeSortOrder>("newest");
  const router = useRouter();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const {
    refreshing,
    refresh,
    confirmDelete,
    pendingDeleteRecipe,
    cancelDelete,
    deleteRecipe,
  } = useRecipeActions({
    hasRecipes: recipes.length > 0,
    setRecipes,
    setStatus,
  });

  useEffect(() => {
    let ignore = false;

    void loadRecipes().then((result) => {
      if (ignore) return;

      if (result.status === "ready") {
        setRecipes(result.recipes);
      }
      setStatus(result.status);
    });

    return () => {
      ignore = true;
    };
  }, [attempt]);

  const { recipeCount, totalPrepMinutes, maxServings } =
    getRecipeSummary(recipes);
  const visibleRecipes = sortRecipes(
    filterRecipes(recipes, selectedFilter),
    selectedSort,
  );

  const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;
  const cardWidth =
    (width - Spacing.lg * 2 - Spacing.lg * (columns - 1)) / columns;
  const retry = () => {
    setStatus("loading");
    setAttempt((currentAttempt) => currentAttempt + 1);
  };
  const emptyStateStatus = status === "ready" ? "empty" : status;

  return (
    <>
      <FlatList
        key={columns}
        style={[styles.container, { backgroundColor: theme.background }]}
        contentContainerStyle={{
          flexGrow: 1,
          padding: Spacing.lg,
          paddingBottom: Spacing.md + insets.bottom,
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={refresh}
        data={visibleRecipes}
        keyExtractor={(recipe) => recipe.id}
        numColumns={columns}
        columnWrapperStyle={columns > 1 ? styles.columnWrapper : undefined}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            style={{ width: cardWidth }}
            onPress={() => router.push(`/recipe/${item.id}`)}
            onLongPress={() => confirmDelete(item)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        ListHeaderComponent={
          <RecipeListHeader
            recipeCount={recipeCount}
            totalPrepMinutes={totalPrepMinutes}
            maxServings={maxServings}
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
            selectedSort={selectedSort}
            onSortChange={setSelectedSort}
          />
        }
        ListEmptyComponent={
          <RecipeListFeedback
            status={emptyStateStatus}
            filter={selectedFilter}
            onRetry={retry}
          />
        }
      />
      <DeleteRecipeModal
        recipe={pendingDeleteRecipe}
        onCancel={cancelDelete}
        onDelete={deleteRecipe}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWrapper: {
    flexDirection: "row",
    columnGap: Spacing.lg,
  },
  itemSeparator: {
    height: Spacing.lg,
  },
});
