import { Spacing } from "@/constants/theme";
import { MOCK_RECIPES } from "@/data/recipes";
import { useTheme } from "@/hooks/use-theme";
import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RecipeCard } from "../components/RecipeCard";
import { RecipeStats } from "../components/RecipeStats";
import { ThemeModeSwitch } from "../components/ThemeModeSwitch";

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
    <FlatList
      key={columns}
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={{
        padding: Spacing.lg,
        paddingBottom: Spacing.md + insets.bottom,
      }}
      showsVerticalScrollIndicator={false}
      data={MOCK_RECIPES}
      keyExtractor={(recipe) => recipe.id}
      numColumns={columns}
      columnWrapperStyle={columns > 1 ? styles.columnWrapper : undefined}
      renderItem={({ item }) => (
        <RecipeCard recipe={item} style={{ width: cardWidth }} />
      )}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      ListHeaderComponent={
        <View>
          <ThemeModeSwitch />
          <RecipeStats
            recipeCount={recipeCount}
            totalPrepMinutes={totalPrepMinutes}
            maxServings={maxServings}
          />
        </View>
      }
      ListHeaderComponentStyle={styles.listHeader}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    marginBottom: Spacing.lg,
  },
  columnWrapper: {
    flexDirection: "row",
    columnGap: Spacing.lg,
  },
  itemSeparator: {
    height: Spacing.lg,
  },
});