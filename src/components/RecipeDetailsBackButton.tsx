import { Pressable, StyleSheet, Text } from 'react-native';

import { FontSizes, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type RecipeDetailsBackButtonProps = {
  onPress: () => void;
};

export function RecipeDetailsBackButton({
  onPress,
}: RecipeDetailsBackButtonProps) {
  const theme = useTheme();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed
            ? theme.backgroundSelected
            : theme.backgroundElement,
          borderColor: theme.border,
        },
      ]}
    >
      <Text style={[styles.label, { color: theme.primary }]}>
        Back to recipes
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: Radius.lg,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    marginHorizontal: Spacing.xl,
    marginTop: Spacing.md,
  },
  label: {
    fontSize: FontSizes.body,
    fontWeight: '600',
  },
});
