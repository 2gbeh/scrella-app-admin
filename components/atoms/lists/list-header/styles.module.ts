import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/COLORS";
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";

export const listHeaderStyles = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    backgroundColor: COLORS.background,
    gap: 16,
  },
  content: {
    paddingHorizontal: 16,
    gap: 16,
  },
  section: {
    ...flexStyles.rowCenterBetween,
    paddingHorizontal: 16,
  },
  title: {
    color: COLORS.black,
    ...textStyles.titleMedium,
  },
  subtitle: {
    color: COLORS.icon,
    ...textStyles.bodyLarge,
  },
  subtitleWrapper: {
    ...flexStyles.rowCenterStart,
    gap: 8,
  },
});
