import { FontSizes, Spacing } from "@/constants/theme";
import { MOCK_RECIPES } from "@/data/recipes";
import { useTheme } from "@/hooks/use-theme";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RecipeCard } from "../components/RecipeCard";

export default function HomeScreen() {
  const recipeCount = MOCK_RECIPES.length;
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={[
        styles.scrollContent,
        { paddingBottom: Spacing.md + insets.bottom },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerContainer}>
        <Text style={[styles.countText, { color: theme.textSecondary }]}>
          {recipeCount} {recipeCount === 1 ? "recipe" : "recipes"}
        </Text>
      </View>

      <View style={styles.gridContainer}>
        {MOCK_RECIPES.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
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
  headerContainer: {
    marginBottom: Spacing.md + Spacing.sm,
  },
  countText: {
    fontSize: FontSizes.body,
    fontWeight: "500",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: Spacing.lg,
  },
});