import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";

export const listItemStyles = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    height: SIZES.listItemContainer2,
    ...flexStyles.rowCenterStart,
    gap: 16,
  },
  avatar: {
    backgroundColor: COLORS.primaryContainer,
    borderRadius: SIZES.listItemAvatar,
    width: SIZES.listItemAvatar,
    height: SIZES.listItemAvatar,
    ...flexStyles.centerCenter,
  },
  avatarText: {
    color: COLORS.primaryDark,
    ...textStyles.titleMedium,
  },
  content: {
    ...flexStyles.rowCenterBetween,
    flex: 1,
    gap: 16,
  },
  article: {
    flex: 1,
  },
  titleWrapper: {
    ...flexStyles.rowCenterBetween,
    gap: 16,
  },
  title: {
    color: COLORS.black,
    ...textStyles.bodyLarge,
  },
  subtitle: {
    color: COLORS.muted,
    ...textStyles.labelSmall,
  },
  description: {
    color: COLORS.muted,
    ...textStyles.bodyMedium,
  },
  iconContainer: {
    ...flexStyles.centerCenter,
    width: SIZES.listItemTrailingIconContainer,
    height: SIZES.listItemTrailingIconContainer,
  },
});
