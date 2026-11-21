import { StyleSheet, View } from "react-native";

import { Spacing } from "@/constants/theme";
import { RecipeStats } from "@/components/RecipeStats";
import { ThemeModeSwitch } from "@/components/ThemeModeSwitch";

type RecipeListHeaderProps = {
  recipeCount: number;
  totalPrepMinutes: number;
  maxServings: number;
};

export function RecipeListHeader({
  recipeCount,
  totalPrepMinutes,
  maxServings,
}: RecipeListHeaderProps) {
  return (
    <View style={styles.container}>
      <ThemeModeSwitch />
      <RecipeStats
        recipeCount={recipeCount}
        totalPrepMinutes={totalPrepMinutes}
        maxServings={maxServings}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
});
