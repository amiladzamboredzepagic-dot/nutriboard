import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";

import { FontSizes, Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import EmptyState from "@/components/EmptyState";
import type { RecipeFilter } from "@/types";

type RecipeListFeedbackProps = {
  status: "loading" | "error" | "empty";
  filter: RecipeFilter;
  onRetry: () => void;
};

export function RecipeListFeedback({
  status,
  filter,
  onRetry,
}: RecipeListFeedbackProps) {
  const theme = useTheme();

  if (status === "loading") {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          color={theme.primary}
          size="large"
          accessibilityLabel="Loading recipes"
        />
      </View>
    );
  }

  if (status === "error") {
    return (
      <View style={styles.container}>
        <Text style={[styles.errorMessage, { color: theme.alertError }]}>
          Could not load recipes
        </Text>
        <Pressable
          accessibilityRole="button"
          onPress={onRetry}
          style={[styles.retryButton, { backgroundColor: theme.primary }]}
        >
          <Text style={[styles.retryButtonText, { color: theme.background }]}>
            Try again
          </Text>
        </Pressable>
      </View>
    );
  }

  return filter === "all" ? (
    <EmptyState
      title="No recipes yet"
      message="Your recipes will appear here."
    />
  ) : (
    <EmptyState
      title={`No ${filter.toLowerCase()} recipes`}
      message="Choose another meal type."
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.md,
    padding: Spacing.lg,
  },
  errorMessage: {
    fontSize: FontSizes.body,
    textAlign: "center",
  },
  retryButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: Radius.lg,
  },
  retryButtonText: {
    fontSize: FontSizes.body,
    fontWeight: "600",
  },
});
