import { SymbolView } from 'expo-symbols';
import { Image, StyleSheet, Text, View } from 'react-native';

import { FontSizes, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type RecipeCardMediaProps = {
  imageUri?: string | null;
  prepTimeMinutes: number;
};

export function RecipeCardMedia({
  imageUri,
  prepTimeMinutes,
}: RecipeCardMediaProps) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { borderColor: theme.imageBorder }]}>
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View
          style={[
            styles.placeholder,
            { backgroundColor: theme.imagePlaceholder },
          ]}
        >
          <View
            style={[
              styles.mediaLabel,
              { backgroundColor: theme.imagePlaceholder },
            ]}
          >
            <SymbolView
              name={{
                ios: 'play.circle',
                android: 'play_circle',
                web: 'play_circle',
              }}
              tintColor={theme.text}
              size={22}
            />
            <Text style={[styles.mediaLabelText, { color: theme.textSecondary }]}>
              Recipe photo
            </Text>
          </View>
        </View>
      )}
      <View
        style={[styles.durationBadge, { backgroundColor: theme.backgroundElement }]}
      >
        <Text style={[styles.durationText, { color: theme.text }]}>
          {prepTimeMinutes}m
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 130,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: Radius.sm,
    borderWidth: 0.5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaLabel: {
    width: 79,
    height: 49,
    alignItems: 'center',
    paddingVertical: Spacing.tight,
    gap: Spacing.tight,
  },
  mediaLabelText: {
    fontSize: FontSizes.caption,
    lineHeight: FontSizes.caption + Spacing.xs,
  },
  durationBadge: {
    position: 'absolute',
    right: Spacing.compact,
    bottom: Spacing.compact,
    minWidth: 25,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.xs,
  },
  durationText: {
    fontSize: FontSizes.caption,
    lineHeight: FontSizes.caption + Spacing.xs,
  },
});
