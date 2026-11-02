import { Recipe } from '@/types';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface RecipeDetailsProps {
  recipe: Recipe;
}

export const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  const defaultImage = 'https://via.placeholder.com/600x300';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image
        source={{ uri: recipe.dishImageUri || defaultImage }}
        style={styles.heroImage}
        resizeMode="cover"
      />

      <View style={styles.body}>
        <Text style={styles.title}>{recipe.title}</Text>

        {recipe.shortDescription ? (
          <Text style={styles.description}>{recipe.shortDescription}</Text>
        ) : null}

        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeLabel}>Prep Time</Text>
            <Text style={styles.badgeValue}>{recipe.prepTimeMinutes} mins</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeLabel}>Servings</Text>
            <Text style={styles.badgeValue}>{recipe.servings}</Text>
          </View>
          {recipe.mealType ? (
            <View style={styles.badge}>
              <Text style={styles.badgeLabel}>Meal Type</Text>
              <Text style={styles.badgeValue}>{recipe.mealType}</Text>
            </View>
          ) : null}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <View key={`ing-${index}`} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{ingredient}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preparation Steps</Text>
          {recipe.preparationSteps.map((step, index) => (
            <View key={step.id || `step-${index}`} style={styles.stepItem}>
              <View style={styles.stepNumberBadge}>
                <Text style={styles.stepNumber}>{index + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingBottom: 32,
  },
  heroImage: {
    width: '100%',
    height: 240,
    backgroundColor: '#F3F4F6',
  },
  body: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 16,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  badge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  badgeLabel: {
    fontSize: 11,
    color: '#6B7280',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  badgeValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 2,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    color: '#10B981',
    marginRight: 8,
    lineHeight: 20,
  },
  listText: {
    fontSize: 15,
    color: '#374151',
    flex: 1,
    lineHeight: 20,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  stepNumberBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 1,
  },
  stepNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
  },
  stepText: {
    fontSize: 15,
    color: '#374151',
    flex: 1,
    lineHeight: 22,
  },
  notesSection: {
    backgroundColor: '#FEF3C7',
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
  },
  notesText: {
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20,
  },
});