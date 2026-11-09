import { SymbolView } from 'expo-symbols';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { FontSizes, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Recipe } from '@/types';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const theme = useTheme();
  const handlePress = () => {
    console.log(`Pressed recipe: ${recipe.title}`);    
  };

  const detailsText = `${recipe.prepTimeMinutes}m · ${recipe.servings} serving${recipe.servings > 1 ? 's' : ''}`;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        pressed && { opacity: 0.95, backgroundColor: theme.backgroundSelected },
      ]}
      android_ripple={{ color: theme.backgroundSelected }}
      onPress={handlePress}
    >
      <View style={[styles.imageContainer, { borderColor: theme.imageBorder }]}>
        {recipe.dishImageUri ? (
          <Image
            source={{ uri: recipe.dishImageUri }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.imagePlaceholder, { backgroundColor: theme.imagePlaceholder }]}>
            <View style={[styles.mediaLabel, { backgroundColor: theme.imagePlaceholder }]}>
              <SymbolView
                name={{ ios: 'play.circle', android: 'play_circle', web: 'play_circle' }}
                tintColor={theme.text}
                size={22}
              />
              <Text style={[styles.mediaLabelText, { color: theme.textSecondary }]}>
                Recipe photo
              </Text>
            </View>
          </View>
        )}
        <View style={[styles.durationBadge, { backgroundColor: theme.backgroundElement }]}>
          <Text style={[styles.durationText, { color: theme.text }]}>
            {recipe.prepTimeMinutes}m
          </Text>
        </View>
      </View>
      <View style={styles.recipeInformation}>
        <View style={styles.recipeDetails}>
          <Text style={[styles.title, { color: theme.text }]} numberOfLines={2}>
            {recipe.title}
          </Text>
          <Text style={[styles.details, { color: theme.textSecondary }]} numberOfLines={1}>
            {detailsText}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 163,
    height: 192,
    gap: Spacing.md,
    padding: 0,
  },
  imageContainer: {
    width: '100%',
    height: 130,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: Radius.sm,
    borderWidth: 0.5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaLabel: {
    width: 79,
    height: 49,
    alignItems: 'center',
    paddingVertical: Spacing.tight,
    gap: Spacing.tight,
  },
  mediaLabelText: {
    fontSize: FontSizes.caption,
    lineHeight: FontSizes.caption + Spacing.xs,
  },
  durationBadge: {
    position: 'absolute',
    right: Spacing.compact,
    bottom: Spacing.compact,
    minWidth: 25,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.xs,
  },
  durationText: {
    fontSize: FontSizes.caption,
    lineHeight: FontSizes.caption + Spacing.xs,
  },
  recipeInformation: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.compact,
  },
  recipeDetails: {
    flex: 1,
    gap: Spacing.tight,
  },
  title: {
    fontSize: FontSizes.body,
    lineHeight: FontSizes.body + Spacing.sm,
    fontWeight: '600',
  },
  details: {
    fontSize: FontSizes.helper,
    lineHeight: FontSizes.helper + Spacing.xs,
    fontWeight: '400',
  }
});