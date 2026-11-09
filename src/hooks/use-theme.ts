/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/theme';
import { useThemeMode } from '@/contexts/theme-mode-context';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function useTheme() {
  const systemScheme = useColorScheme();
  const { themeMode } = useThemeMode();
  const scheme =
    themeMode === 'system'
      ? systemScheme === 'unspecified' || systemScheme === null
        ? 'light'
        : systemScheme
      : themeMode;

  return Colors[scheme];
}
