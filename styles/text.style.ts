import { FONTS } from "@/constants/FONTS";
import { StyleSheet } from "react-native";

export const textStyles = StyleSheet.create({
  titleLarge: {
    fontWeight: "400",
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0,
  },
  titleLargeBold: {
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0,
  },
  titleMedium: {
    fontFamily: FONTS.primary500,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  titleSmall: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  bodyLarge: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  bodyMedium: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  labelLarge: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  labelLargeBold: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  labelMedium: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  labelMediumBold: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  labelSmall: {
    fontWeight: "500",
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
});
