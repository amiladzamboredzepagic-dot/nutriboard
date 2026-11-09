import { useTheme } from '@/hooks/use-theme';
import { Stack } from 'expo-router';

export default function RootLayout() {
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