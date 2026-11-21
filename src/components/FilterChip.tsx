import { Pressable, StyleSheet, Text } from "react-native";

import { FontSizes, Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { FilterChipCheckmark } from "@/components/FilterChipCheckmark";

type FilterChipProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export function FilterChip({ label, selected, onPress }: FilterChipProps) {
  const theme = useTheme();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected }}
      onPress={onPress}
      style={[
        styles.chip,
        {
          backgroundColor: selected
            ? theme.backgroundSelected
            : theme.backgroundElement,
          borderColor: selected ? theme.primary : theme.imageBorder,
        },
      ]}
    >
      {selected && (
        <FilterChipCheckmark color={theme.primary} />
      )}
      <Text
        style={[
          styles.label,
          {
            color: selected ? theme.primary : theme.text,
            fontWeight: selected ? "700" : "400",
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    alignItems: "center",
    flexDirection: "row",
    gap: Spacing.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Radius.pill,
  },
  label: {
    fontSize: FontSizes.label,
  },
});
