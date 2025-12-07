import { ViewStyle } from "react-native";

export const shadowMixinStyle = (height = 1) => ({
  // Shadow (iOS)
  shadowColor: "#000",
  shadowOffset: { width: 0, height },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  // Shadow (Android)
  elevation: 4,
} as ViewStyle);
