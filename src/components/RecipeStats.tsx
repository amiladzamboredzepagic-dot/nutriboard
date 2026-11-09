import { StyleSheet, Text, View } from 'react-native';

import { FontSizes, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type RecipeStatsProps = {
  recipeCount: number;
  totalPrepMinutes: number;
  maxServings: number;
};

export function RecipeStats({ recipeCount, totalPrepMinutes, maxServings }: RecipeStatsProps) {
  const theme = useTheme();
  const stats = [
    { value: recipeCount, label: 'Recipes' },
    { value: totalPrepMinutes, label: 'Total prep min' },
    { value: maxServings, label: 'Max servings' },
  ];

  return (
    <View style={styles.statsRow}>
      {stats.map(({ value, label }) => (
        <View
          key={label}
          style={[styles.statBox, { backgroundColor: theme.backgroundElement }]}>
          <Text style={[styles.statValue, { color: theme.text }]}>{value}</Text>
          <Text style={[styles.statLabel, { color: theme.textSecondary }]}>{label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  statBox: {
    flex: 1,
    minHeight: 72,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.xs,
    paddingHorizontal: Spacing.xs,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.lg,
  },
  statValue: {
    fontSize: FontSizes.title,
    fontWeight: '600',
  },
  statLabel: {
    fontSize: FontSizes.caption,
    textAlign: 'center',
  },
});
