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
  const handlePress = () => {
    console.log(`Pressed recipe: ${recipe.title}`);    
  };

  const detailsText = `${recipe.prepTimeMinutes}m · ${recipe.servings} serving${recipe.servings > 1 ? 's' : ''}`;
  const defaultImage = 'https://via.placeholder.com/163x130';
  

  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        pressed && styles.cardPressed,
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
        <Text style={styles.title} numberOfLines={1}>
          {recipe.title}
        </Text>
        <Text style={styles.details} numberOfLines={1}>
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
  cardPressed: {
    opacity: 0.95,
    backgroundColor: '#F7F7F7',
  },
  image: {
    width: '100%',
    height: 160, 
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  details: {
    fontSize: 12,
    fontWeight: '400',
  },
});