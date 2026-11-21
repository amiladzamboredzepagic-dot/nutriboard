import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { FontSizes, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function NotFoundScreen() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Page not found</Text>
      <Text style={[styles.message, { color: theme.textSecondary }]}>
        This page does not exist.
      </Text>
      <Link href="/" replace style={[styles.link, { color: theme.primary }]}>
        Back to recipes
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
    gap: Spacing.md,
  },
  title: {
    fontSize: FontSizes.title,
    fontWeight: '600',
    textAlign: 'center',
  },
  message: {
    fontSize: FontSizes.body,
    textAlign: 'center',
  },
  link: {
    fontSize: FontSizes.body,
    fontWeight: '600',
    marginTop: Spacing.sm,
  },
});
