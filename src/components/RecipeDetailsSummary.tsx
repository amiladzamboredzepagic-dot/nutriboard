import { Image, StyleSheet, Text, View } from 'react-native';

import { FontSizes, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Recipe } from '@/types';

type RecipeDetailsSummaryProps = {
  recipe: Recipe;
};

type MetadataBadgeProps = {
  value: string;
};

function Metric({ value }: MetadataBadgeProps) {
  const theme = useTheme();
  return (
    <View style={styles.metric}>
      <Text style={[styles.metricValue, { color: theme.primary }]}>
        {value}
      </Text>
    </View>
  );
}

export function RecipeDetailsSummary({ recipe }: RecipeDetailsSummaryProps) {
  const theme = useTheme();

  return (
    <>
      <Image
        source={{
          uri: recipe.dishImageUri || 'https://via.placeholder.com/600x300',
        }}
        style={[
          styles.image,
          {
            backgroundColor: theme.imagePlaceholder,
            borderColor: theme.imageBorder,
          },
        ]}
        resizeMode="cover"
      />
      <View style={styles.body}>
        <Text style={[styles.title, { color: theme.primary }]}>
          {recipe.title}
        </Text>
        <View
          style={[
            styles.recipeBadge,
            { backgroundColor: theme.backgroundSelected },
          ]}
        >
          <Text style={[styles.recipeBadgeText, { color: theme.primary }]}>
            Your recipe
          </Text>
        </View>
        <Text style={[styles.description, { color: theme.textSecondary }]}>
          {recipe.shortDescription?.trim() || 'No notes for this recipe.'}
        </Text>
        <View
          style={[
            styles.metrics,
            { backgroundColor: theme.backgroundSelected },
          ]}
        >
          <Metric value={`${recipe.prepTimeMinutes} min`} />
          <Metric
            value={`${recipe.servings} serving${recipe.servings === 1 ? '' : 's'}`}
          />
          {recipe.mealType ? (
            <Metric value={recipe.mealType} />
          ) : null}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderWidth: 1,
  },
  body: {
    padding: Spacing.xl,
  },
  title: {
    fontSize: FontSizes.title,
    fontWeight: '400',
    marginBottom: Spacing.sm,
  },
  recipeBadge: {
    alignSelf: 'flex-start',
    borderRadius: Radius.lg,
    paddingHorizontal: Spacing.md + Spacing.xs,
    paddingVertical: Spacing.sm,
    marginBottom: Spacing.md,
  },
  recipeBadgeText: {
    fontSize: FontSizes.body,
    fontWeight: '600',
  },
  description: {
    fontSize: FontSizes.body,
    lineHeight: FontSizes.body + Spacing.md + Spacing.xs,
    marginBottom: Spacing.xl,
  },
  metrics: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.lg,
    paddingVertical: Spacing.md,
  },
  metric: {
    flex: 1,
    alignItems: 'center',
  },
  metricValue: {
    fontSize: FontSizes.body,
    fontWeight: '400',
  },
});
