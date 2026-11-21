import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { FontSizes, Spacing } from '@/constants/theme';
import { getRecipe } from '@/data/api';
import { useTheme } from '@/hooks/use-theme';
import EmptyState from '@/components/EmptyState';
import { RecipeDetails } from '@/components/RecipeDetails';

export default function RecipeDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  const router = useRouter();
  const recipe = getRecipe(id);
  const canGoBack = router.canGoBack();
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace('/');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerTintColor: theme.primary,
          headerLeft: canGoBack
            ? () => (
                <Pressable
                  accessibilityLabel="Back to recipes"
                  accessibilityRole="button"
                  onPress={handleBack}
                  style={styles.headerBack}
                >
                  <SymbolView
                    name={{
                      ios: 'arrow.left',
                      android: 'arrow_back',
                      web: 'arrow_back',
                    }}
                    tintColor={theme.primary}
                    size={20}
                  />
                  <Text
                    style={[styles.headerBackLabel, { color: theme.primary }]}
                  >
                    Recipes
                  </Text>
                </Pressable>
              )
            : () => null,
        }}
      />
      {recipe ? (
        <RecipeDetails recipe={recipe} onBack={handleBack} />
      ) : (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
          <EmptyState
            title="Recipe not found"
            message="This recipe may not exist or is no longer available."
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.lg,
  },
  headerBack: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingRight: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  headerBackLabel: {
    fontSize: FontSizes.body,
  },
});
