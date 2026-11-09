import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { FontSizes, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Recipe } from '@/types';

interface RecipeDetailsProps {
  recipe: Recipe;
}

export const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  const theme = useTheme();
  const defaultImage = 'https://via.placeholder.com/600x300';

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.content}>
      <View style={styles.page}>
        <Image
          source={{ uri: recipe.dishImageUri || defaultImage }}
          style={[styles.heroImage, { backgroundColor: theme.imagePlaceholder }]}
          resizeMode="cover"
        />

        <View style={styles.body}>
          <Text style={[styles.title, { color: theme.text }]}>{recipe.title}</Text>

          {recipe.shortDescription ? (
            <Text style={[styles.description, { color: theme.textSecondary }]}>
              {recipe.shortDescription}
            </Text>
          ) : null}

          <View style={styles.badgeRow}>
            <View style={[styles.badge, { backgroundColor: theme.backgroundElement }]}>
              <Text style={[styles.badgeLabel, { color: theme.textSecondary }]}>Prep Time</Text>
              <Text style={[styles.badgeValue, { color: theme.text }]}>
                {recipe.prepTimeMinutes} mins
              </Text>
            </View>
            <View style={[styles.badge, { backgroundColor: theme.backgroundElement }]}>
              <Text style={[styles.badgeLabel, { color: theme.textSecondary }]}>Servings</Text>
              <Text style={[styles.badgeValue, { color: theme.text }]}>{recipe.servings}</Text>
            </View>
            {recipe.mealType ? (
              <View style={[styles.badge, { backgroundColor: theme.backgroundElement }]}>
                <Text style={[styles.badgeLabel, { color: theme.textSecondary }]}>Meal Type</Text>
                <Text style={[styles.badgeValue, { color: theme.text }]}>{recipe.mealType}</Text>
              </View>
            ) : null}
          </View>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Ingredients</Text>
            {recipe.ingredients.map((ingredient, index) => (
              <View key={`ing-${index}`} style={styles.listItem}>
                <Text style={[styles.bullet, { color: theme.primary }]}>•</Text>
                <Text style={[styles.listText, { color: theme.text }]}>{ingredient}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Preparation Steps</Text>
            {recipe.preparationSteps.map((step, index) => (
              <View key={step.id || `step-${index}`} style={styles.stepItem}>
                <View style={[styles.stepNumberBadge, { backgroundColor: theme.alertInfoBackground }]}>
                  <Text style={[styles.stepNumber, { color: theme.alertInfo }]}>{index + 1}</Text>
                </View>
                <Text style={[styles.stepText, { color: theme.text }]}>{step.description}</Text>
              </View>
            ))}
          </View>

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: Spacing.xxl,
  },
  page: {
    width: '100%',
    maxWidth: 800,
  },
  heroImage: {
    width: '100%',
    height: 240,
  },
  body: {
    padding: Spacing.xl,
  },
  title: {
    fontSize: FontSizes.title,
    fontWeight: '700',
    marginBottom: Spacing.md,
  },
  description: {
    fontSize: FontSizes.body,
    fontWeight: '400',
    lineHeight: FontSizes.body + Spacing.md + Spacing.xs,
    marginBottom: Spacing.lg,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  badge: {
    paddingHorizontal: Spacing.md + Spacing.xs,
    paddingVertical: Spacing.md,
    borderRadius: Radius.lg,
    alignItems: 'center',
  },
  badgeLabel: {
    fontSize: FontSizes.helper,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  badgeValue: {
    fontSize: FontSizes.body,
    fontWeight: '600',
    marginTop: Spacing.xs,
  },
  section: {
    marginTop: Spacing.xl,
  },
  sectionTitle: {
    fontSize: FontSizes.brand,
    fontWeight: '600',
    marginBottom: Spacing.md + Spacing.xs,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  bullet: {
    fontSize: FontSizes.body,
    marginRight: Spacing.md,
    lineHeight: 20,
  },
  listText: {
    fontSize: FontSizes.body,
    flex: 1,
    lineHeight: 20,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.md + Spacing.sm,
  },
  stepNumberBadge: {
    width: Spacing.xl,
    height: Spacing.xl,
    borderRadius: Radius.pill,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md + Spacing.xs,
    marginTop: 1,
  },
  stepNumber: {
    fontSize: FontSizes.small,
    fontWeight: '700',
  },
  stepText: {
    fontSize: FontSizes.body,
    flex: 1,
    lineHeight: FontSizes.body + Spacing.md + Spacing.xs,
  },
  notesSection: {
    padding: Spacing.lg,
    borderRadius: Radius.xl,
    marginTop: Spacing.xl,
  },
  notesText: {
    fontSize: FontSizes.body,
    lineHeight: 20,
  },
});