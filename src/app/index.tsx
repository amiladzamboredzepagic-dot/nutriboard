import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { loadRecipes } from "@/utils/recipes";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { Recipe } from "@/types";
import { RecipeCard } from "../components/RecipeCard";
import { RecipeListFeedback } from "../components/RecipeListFeedback";
import { RecipeListHeader } from "../components/RecipeListHeader";

type LoadStatus = "loading" | "error" | "ready";

export default function HomeScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [status, setStatus] = useState<LoadStatus>("loading");
  const [attempt, setAttempt] = useState(0);
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

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

  const recipeCount = recipes.length;
  const totalPrepMinutes = recipes.reduce(
    (total, recipe) => total + recipe.prepTimeMinutes,
    0,
  );
  const maxServings = recipes.reduce(
    (maximum, recipe) => Math.max(maximum, recipe.servings),
    0,
  );

  const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;
  const cardWidth =
    (width - Spacing.lg * 2 - Spacing.lg * (columns - 1)) / columns;
  const retry = () => {
    setStatus("loading");
    setAttempt((currentAttempt) => currentAttempt + 1);
  };
  return (
    <FlatList
      key={columns}
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={{
        flexGrow: 1,
        padding: Spacing.lg,
        paddingBottom: Spacing.md + insets.bottom,
      }}
      showsVerticalScrollIndicator={false}
      data={recipes}
      keyExtractor={(recipe) => recipe.id}
      numColumns={columns}
      columnWrapperStyle={columns > 1 ? styles.columnWrapper : undefined}
      renderItem={({ item }) => (
        <RecipeCard recipe={item} style={{ width: cardWidth }} />
      )}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      ListHeaderComponent={
        <RecipeListHeader
          recipeCount={recipeCount}
          totalPrepMinutes={totalPrepMinutes}
          maxServings={maxServings}
        />
      }
      ListEmptyComponent={
        <RecipeListFeedback
          status={status === "ready" ? "empty" : status}
          onRetry={retry}
        />
      }
    />
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
