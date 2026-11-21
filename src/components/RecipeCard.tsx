import React from 'react';
import { Pressable, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Recipe } from '@/types';
import { RecipeCardInfo } from '@/components/RecipeCardInfo';
import { RecipeCardMedia } from '@/components/RecipeCardMedia';

interface RecipeCardProps {
  recipe: Recipe;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  onLongPress: () => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  style,
  onPress,
  onLongPress,
}) => {
  const theme = useTheme();

  const accessibilityLabel = [
    recipe.title,
    recipe.mealType ?? 'Uncategorized',
    `${recipe.prepTimeMinutes} minutes`,
    `${recipe.servings} serving${recipe.servings === 1 ? '' : 's'}`,
  ].join(', ');

  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        style,
        pressed && { opacity: 0.95, backgroundColor: theme.backgroundSelected },
      ]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint="Opens the recipe. Long press to delete."
      android_ripple={{ color: theme.border }}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <RecipeCardMedia
        imageUri={recipe.dishImageUri}
        prepTimeMinutes={recipe.prepTimeMinutes}
      />
      <RecipeCardInfo recipe={recipe} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 192,
    gap: Spacing.md,
    padding: 0,
  },
});