import { StyleSheet, View } from "react-native";

import { Spacing } from "@/constants/theme";
import { FilterChip } from "@/components/FilterChip";
import { RecipeStats } from "@/components/RecipeStats";
import { ThemeModeSwitch } from "@/components/ThemeModeSwitch";
import type { RecipeFilter } from "@/types";

type RecipeListHeaderProps = {
  recipeCount: number;
  totalPrepMinutes: number;
  maxServings: number;
  selectedFilter: RecipeFilter;
  onFilterChange: (filter: RecipeFilter) => void;
};

const FILTERS: { label: string; value: RecipeFilter }[] = [
  { label: "All", value: "all" },
  { label: "Breakfast", value: "Breakfast" },
  { label: "Lunch", value: "Lunch" },
  { label: "Dinner", value: "Dinner" },
  { label: "Snack", value: "Snack" },
];

export function RecipeListHeader({
  recipeCount,
  totalPrepMinutes,
  maxServings,
  selectedFilter,
  onFilterChange,
}: RecipeListHeaderProps) {
  return (
    <View style={styles.container}>
      <ThemeModeSwitch />
      <RecipeStats
        recipeCount={recipeCount}
        totalPrepMinutes={totalPrepMinutes}
        maxServings={maxServings}
      />
      <View style={styles.filterRow}>
        {FILTERS.map(({ label, value }) => (
          <FilterChip
            key={value}
            label={label}
            selected={selectedFilter === value}
            onPress={() => onFilterChange(value)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Spacing.sm,
    marginTop: Spacing.lg,
  },
});
