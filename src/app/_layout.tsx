import { Link, Stack } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Spacing } from '@/constants/theme';
import { ThemeModeProvider } from '@/contexts/theme-mode-context';
import { useTheme } from '@/hooks/use-theme';

function RootStack() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerLargeStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: theme.text,
        },
        headerLargeTitleStyle: {
          color: theme.text,
        },
        headerTintColor: theme.text,
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        contentStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'My NutriBoard Recipes',
          headerLargeTitle: true,
          headerRight: () => (
            <Link
              href="/about"
              style={{ color: theme.primary, fontSize: 16 }}
            >
              About
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: 'About',
          headerLeft: () => (
            <Link href="/" dismissTo asChild>
              <Pressable
                accessibilityLabel="Back to recipes"
                accessibilityRole="button"
                style={styles.backButton}
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
                <Text style={[styles.backLabel, { color: theme.primary }]}>
                  Recipes
                </Text>
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ThemeModeProvider>
      <RootStack />
    </ThemeModeProvider>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingRight: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  backLabel: {
    fontSize: 14,
  },
});