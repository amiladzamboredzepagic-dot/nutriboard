import { Link, Stack } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet } from 'react-native';
import { ThemeModeProvider } from '@/contexts/theme-mode-context';
import { useTheme } from '@/hooks/use-theme';

function RootStack() {
  const theme = useTheme();

  return (
    <Stack>

      <Stack.Screen
        name="index"
        options={{
          title: 'My NutriBoard Recipes',
          headerLargeTitle: true,
          headerStyle: {
            backgroundColor: theme.background,
          },
            headerTitleStyle: {
            fontWeight: 'bold',
            color: theme.text,
          },
          headerTintColor: theme.text,
          contentStyle: { backgroundColor: theme.background },
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: 'About',
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: theme.text,
          },
          headerTintColor: theme.text,
          contentStyle: { backgroundColor: theme.background },
          headerLeft: () => (
            <Link href="/" replace asChild>
              <Pressable
                accessibilityLabel="Back to recipes"
                accessibilityRole="button"
                style={styles.backButton}
              >
                <SymbolView
                  name={{
                    ios: 'chevron.left',
                    android: 'arrow_back',
                    web: 'arrow_back',
                  }}
                  tintColor={theme.text}
                  size={22}
                />
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
    padding: 8,
  },
});