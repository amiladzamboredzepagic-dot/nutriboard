import { Stack } from 'expo-router';
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