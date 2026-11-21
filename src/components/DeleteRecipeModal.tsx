import { SymbolView } from "expo-symbols";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { FontSizes, Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import type { Recipe } from "@/types";

type DeleteRecipeModalProps = {
  recipe: Recipe | null;
  onCancel: () => void;
  onDelete: (recipe: Recipe) => void;
};

export function DeleteRecipeModal({
  recipe,
  onCancel,
  onDelete,
}: DeleteRecipeModalProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Modal
      animationType="fade"
      onRequestClose={onCancel}
      transparent
      visible={recipe !== null}
    >
      <View
        style={[
          styles.backdrop,
          {
            paddingTop: Math.max(insets.top, Spacing.xl),
            paddingBottom: Math.max(insets.bottom, Spacing.xl),
          },
        ]}
      >
        {recipe && (
          <View
            accessibilityViewIsModal
            style={[
              styles.dialog,
              {
                backgroundColor: theme.backgroundElement,
                borderColor: theme.border,
              },
            ]}
          >
            <View style={styles.heading}>
              <SymbolView
                name={{
                  ios: "trash",
                  android: "delete_outline",
                  web: "delete_outline",
                }}
                tintColor={theme.primary}
                size={26}
              />
              <Text style={[styles.title, { color: theme.primary }]}>
                Delete recipe?
              </Text>
            </View>

            <View style={styles.message}>
              <Text style={[styles.recipeTitle, { color: theme.text }]}>
                {recipe.title}
              </Text>
              <Text style={[styles.body, { color: theme.text }]}>
                This removes the recipe from your list.
              </Text>
              <Text style={[styles.note, { color: theme.textSecondary }]}>
                Refreshing the list will restore it.
              </Text>
            </View>

            <View style={styles.actions}>
              <Pressable
                accessibilityLabel="Cancel delete"
                accessibilityRole="button"
                onPress={onCancel}
                style={[styles.button, styles.cancelButton, { borderColor: theme.border }]}
              >
                <Text style={[styles.buttonLabel, { color: theme.primary }]}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                accessibilityLabel={`Delete ${recipe.title}`}
                accessibilityRole="button"
                onPress={() => onDelete(recipe)}
                style={[
                  styles.button,
                  styles.deleteButton,
                  { backgroundColor: theme.primary },
                ]}
              >
                <Text
                  style={[
                    styles.buttonLabel,
                    { color: theme.backgroundElement },
                  ]}
                >
                  Delete recipe
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: Spacing.lg,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  dialog: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 480,
    gap: Spacing.lg,
    padding: Spacing.xl,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Radius.xxl,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.md,
  },
  title: {
    fontSize: FontSizes.heading,
    lineHeight: FontSizes.heading + Spacing.md,
    fontWeight: "400",
  },
  message: {
    gap: Spacing.md,
  },
  recipeTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  note: {
    fontSize: FontSizes.body,
    lineHeight: FontSizes.body + Spacing.md,
  },
  actions: {
    flexDirection: "row",
    gap: Spacing.md,
  },
  button: {
    flex: 1,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Radius.lg,
  },
  cancelButton: {
    backgroundColor: "transparent",
  },
  deleteButton: {
    borderColor: "transparent",
  },
  buttonLabel: {
    fontSize: FontSizes.body,
    fontWeight: "700",
    textAlign: "center",
  },
});
