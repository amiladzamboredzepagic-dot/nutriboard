import { Spacing } from "@/constants/theme";
import { MOCK_RECIPES } from "@/data/recipes";
import { useTheme } from "@/hooks/use-theme";
import { ScrollView, StyleSheet, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RecipeCard } from "../components/RecipeCard";
import { RecipeStats } from "../components/RecipeStats";

const totalPrepMinutes = MOCK_RECIPES.reduce(
  (total, recipe) => total + recipe.prepTimeMinutes,
  0,
);
const maxServings = MOCK_RECIPES.reduce(
  (maximum, recipe) => Math.max(maximum, recipe.servings),
  0,
);

export default function HomeScreen() {
  const recipeCount = MOCK_RECIPES.length;
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  
  const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;
  const cardWidth =
    (width - Spacing.lg * 2 - Spacing.lg * (columns - 1)) / columns;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={[
        styles.scrollContent,
        { paddingBottom: Spacing.md + insets.bottom },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <RecipeStats
        recipeCount={recipeCount}
        totalPrepMinutes={totalPrepMinutes}
        maxServings={maxServings}
      />

      <View style={styles.gridContainer}>
        {MOCK_RECIPES.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} style={{ width: cardWidth }} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: Spacing.lg,
    rowGap: Spacing.lg,
  },
});