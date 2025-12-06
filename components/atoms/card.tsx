import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
//
import { flexStyles } from "@/styles/flex";
import { textStyles } from "@/styles/text";
import { COLORS } from "@/constants/COLORS";

interface Props extends PropsWithChildren {
  title?: string;
  rightContent?: React.ReactNode;
}

export const Card: React.FC<Props> = ({ children, title, rightContent }) => {
  return (
    <View style={sx.container}>
      {title ? (
        <View style={sx.header}>
          <Text style={sx.heading}>{title}</Text>
          {rightContent}
        </View>
      ) : null}
      {children}
    </View>
  );
};

const sx = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 16,
    gap: 16,
    // Shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow (Android)
    elevation: 4,
  },
  header: {
    ...flexStyles.rowCenterBetween,
    gap: 16,
  },
  heading: {
    color: COLORS.black,
    ...textStyles.titleMedium,
  },
});
