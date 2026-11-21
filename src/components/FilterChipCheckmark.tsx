import { StyleSheet, Text } from "react-native";

import { FontSizes } from "@/constants/theme";

type FilterChipCheckmarkProps = {
  color: string;
};

export function FilterChipCheckmark({ color }: FilterChipCheckmarkProps) {
  return (
    <Text accessible={false} style={[styles.check, { color }]}>
      ✓
    </Text>
  );
}

const styles = StyleSheet.create({
  check: {
    fontSize: FontSizes.label,
    fontWeight: "700",
  },
});
