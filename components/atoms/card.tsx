import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
//
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { COLORS } from "@/constants/COLORS";
import { shadowMixinStyle } from "@/styles/common.style";

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
    borderRadius: 12,
    padding: 16,
    gap: 16,
    ...shadowMixinStyle(),
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
