import { StyleSheet, Text, View } from 'react-native';

import { FontSizes, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { PreparationStep, Recipe } from '@/types';

type RecipeDetailsSectionsProps = {
  recipe: Recipe;
};

type RecipeIngredientsProps = {
  ingredients: string[];
};

type RecipePreparationProps = {
  steps: PreparationStep[];
};

function SectionTitle({ children }: { children: string }) {
  const theme = useTheme();

  return (
    <Text style={[styles.sectionTitle, { color: theme.primary }]}>
      {children}
    </Text>
  );
}

function RecipeIngredients({ ingredients }: RecipeIngredientsProps) {
  const theme = useTheme();

  return (
    <View style={styles.section}>
      <View style={styles.ingredientsHeader}>
        <SectionTitle>Ingredients</SectionTitle>
      </View>
      {ingredients.map((ingredient, index) => (
        <View key={`ing-${index}`} style={styles.ingredient}>
          <View
            accessibilityElementsHidden
            style={[styles.checkbox, { borderColor: theme.primary }]}
          />
          <Text style={[styles.ingredientText, { color: theme.primary }]}>
            {ingredient}
          </Text>
        </View>
      ))}
    </View>
  );
}

function RecipePreparationSteps({ steps }: RecipePreparationProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.section,
        styles.preparationSection,
        { borderColor: theme.border },
      ]}
    >
      <SectionTitle>Let&apos;s make it</SectionTitle>
      {steps.map((step, index) => (
        <View key={step.id || `step-${index}`} style={styles.step}>
          <View
            style={[
              styles.stepNumberBadge,
              { backgroundColor: theme.alertInfoBackground },
            ]}
          >
            <Text style={[styles.stepNumber, { color: theme.alertInfo }]}>
              {index + 1}
            </Text>
          </View>
          <Text style={[styles.stepText, { color: theme.primary }]}>
            {step.description}
          </Text>
        </View>
      ))}
    </View>
  );
}

export function RecipeDetailsSections({
  recipe,
}: RecipeDetailsSectionsProps) {
  return (
    <View style={styles.content}>
      <RecipeIngredients ingredients={recipe.ingredients} />
      <RecipePreparationSteps steps={recipe.preparationSteps} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: Spacing.xl,
  },
  section: {
    marginTop: Spacing.xl,
  },
  sectionTitle: {
    fontSize: FontSizes.brand,
    fontWeight: '600',
    marginBottom: Spacing.md + Spacing.xs,
  },
  ingredientsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ingredient: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  checkbox: {
    width: Spacing.lg,
    height: Spacing.lg,
    borderWidth: 2,
    borderRadius: Radius.xs,
    marginRight: Spacing.md,
    marginTop: Spacing.xs,
  },
  ingredientText: {
    fontSize: FontSizes.body,
    flex: 1,
    lineHeight: 20,
  },
  step: {
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
  preparationSection: {
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: Spacing.xl,
  },
});
