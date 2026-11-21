import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import { getRecipe } from '@/data/api';
import { useTheme } from '@/hooks/use-theme';
import EmptyState from '@/components/EmptyState';

export default function RecipeDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  const recipe = getRecipe(id);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {recipe ? (
        <Text style={[styles.title, { color: theme.text }]}>{recipe.title}</Text>
      ) : (
        <EmptyState
          title="Recipe not found"
          message="This recipe may not exist or is no longer available."
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.lg,
  },
  title: {
    fontSize: 18,
  },
});
