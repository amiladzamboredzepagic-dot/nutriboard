import { Pressable, StyleSheet, Text, View } from 'react-native';

import { FontSizes, Radius, Spacing } from '@/constants/theme';
import { useThemeMode, type ThemeMode } from '@/contexts/theme-mode-context';
import { useTheme } from '@/hooks/use-theme';

const OPTIONS: { label: string; value: ThemeMode }[] = [
  { label: 'System', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

export function ThemeModeSwitch() {
  const theme = useTheme();
  const { themeMode, setThemeMode } = useThemeMode();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundElement }]}
      accessibilityRole="radiogroup"
      accessibilityLabel="Color theme">
      {OPTIONS.map(({ label, value }) => {
        const selected = themeMode === value;

        return (
          <Pressable
            key={value}
            accessibilityRole="radio"
            accessibilityState={{ selected }}
            accessibilityLabel={`${label} theme`}
            onPress={() => setThemeMode(value)}
            style={[
              styles.option,
              selected && { backgroundColor: theme.primary },
            ]}>
            <Text style={[styles.label, { color: selected ? theme.backgroundElement : theme.text }]}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: Spacing.xs,
    gap: Spacing.xs,
    borderRadius: Radius.lg,
    marginBottom: Spacing.lg,
  },
  option: {
    minWidth: 64,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.md,
  },
  label: {
    fontSize: FontSizes.small,
    fontWeight: '600',
  },
});
