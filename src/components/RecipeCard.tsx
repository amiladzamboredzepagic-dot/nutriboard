import { useTheme } from '@/hooks/use-theme';
import { FontSizes } from '@/constants/theme';
import { Recipe } from '@/types';
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const theme = useTheme();
  const handlePress = () => {
    console.log(`Pressed recipe: ${recipe.title}`);    
  };

  const detailsText = `${recipe.prepTimeMinutes}m · ${recipe.servings} serving${recipe.servings > 1 ? 's' : ''}`;
  const defaultImage = 'https://via.placeholder.com/163x130';
  

  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        pressed && { opacity: 0.95, backgroundColor: theme.backgroundSelected },
      ]}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.05)' }}
      onPress={handlePress}
    >
      <Image
        source={{ uri: recipe.dishImageUri || defaultImage }}
        style={styles.image}
        resizeMode="cover"
      />
      <View>
        <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>
          {recipe.title}
        </Text>
        <Text style={[styles.details, { color: theme.textSecondary }]} numberOfLines={1}>
          {detailsText}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 163,
    height: 192,
    gap: 8
  },
  image: {
    width: '100%',
    height: 160, 
  },
  title: {
    fontSize: FontSizes.body,
    fontWeight: '600',
  },
  details: {
    fontSize: FontSizes.small,
    fontWeight: '400',
  },
});