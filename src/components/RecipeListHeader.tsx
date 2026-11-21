import { StyleSheet, View } from "react-native";

import { Spacing } from "@/constants/theme";
import { FilterChip } from "@/components/FilterChip";
import { RecipeStats } from "@/components/RecipeStats";
import { ThemeModeSwitch } from "@/components/ThemeModeSwitch";
import type { RecipeFilter, RecipeSortOrder } from "@/types";

type RecipeListHeaderProps = {
  recipeCount: number;
  totalPrepMinutes: number;
  maxServings: number;
  selectedFilter: RecipeFilter;
  onFilterChange: (filter: RecipeFilter) => void;
  selectedSort: RecipeSortOrder;
  onSortChange: (order: RecipeSortOrder) => void;
};

const FILTERS: { label: string; value: RecipeFilter }[] = [
  { label: "All", value: "all" },
  { label: "Breakfast", value: "Breakfast" },
  { label: "Lunch", value: "Lunch" },
  { label: "Dinner", value: "Dinner" },
  { label: "Snack", value: "Snack" },
];

const SORT_ORDERS: { label: string; value: RecipeSortOrder }[] = [
  { label: "Newest", value: "newest" },
  { label: "Longest", value: "longest" },
];

export function RecipeListHeader({
  recipeCount,
  totalPrepMinutes,
  maxServings,
  selectedFilter,
  onFilterChange,
  selectedSort,
  onSortChange,
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
        {SORT_ORDERS.map(({ label, value }) => (
          <FilterChip
            key={value}
            label={label}
            selected={selectedSort === value}
            onPress={() => onSortChange(value)}
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
    gap: Spacing.md,
    marginTop: Spacing.lg,
  },
});
