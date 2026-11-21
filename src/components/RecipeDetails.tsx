import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Recipe } from '@/types';

import { RecipeDetailsBackButton } from './RecipeDetailsBackButton';
import { RecipeDetailsSections } from './RecipeDetailsSections';
import { RecipeDetailsSummary } from './RecipeDetailsSummary';

interface RecipeDetailsProps {
  recipe: Recipe;
  onBack: () => void;
}

export function RecipeDetails({ recipe, onBack }: RecipeDetailsProps) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={[
        styles.content,
        { paddingBottom: Spacing.xxl + insets.bottom },
      ]}
    >
      <View style={styles.page}>
        <RecipeDetailsSummary recipe={recipe} />
        <RecipeDetailsSections recipe={recipe} />
        <RecipeDetailsBackButton onPress={onBack} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
  },
  page: {
    width: '100%',
    maxWidth: 800,
  },
});
