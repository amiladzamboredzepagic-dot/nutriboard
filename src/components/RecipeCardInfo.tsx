import { StyleSheet, Text, View } from 'react-native';

import { FontSizes, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Recipe } from '@/types';

type RecipeCardInfoProps = {
  recipe: Pick<Recipe, 'title' | 'prepTimeMinutes' | 'servings'>;
};

export function RecipeCardInfo({ recipe }: RecipeCardInfoProps) {
  const theme = useTheme();
  const detailsText = `${recipe.prepTimeMinutes}m · ${recipe.servings} serving${recipe.servings > 1 ? 's' : ''}`;

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={[styles.title, { color: theme.text }]} numberOfLines={2}>
          {recipe.title}
        </Text>
        <Text
          style={[styles.description, { color: theme.textSecondary }]}
          numberOfLines={1}
        >
          {detailsText}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.compact,
  },
  details: {
    flex: 1,
    gap: Spacing.tight,
  },
  title: {
    fontSize: FontSizes.body,
    lineHeight: FontSizes.body + Spacing.sm,
    fontWeight: '600',
  },
  description: {
    fontSize: FontSizes.helper,
    lineHeight: FontSizes.helper + Spacing.xs,
    fontWeight: '400',
  },
});
