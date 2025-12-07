import { StyleSheet, Text, View } from "react-native";
//
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { COLORS } from "@/constants/COLORS";

interface Props {
  label: string;
  value: string;
  color?: string;
}

export const LeaderboardItem: React.FC<Props> = ({ label, value, color }) => {
  return (
    <View style={sx.container}>
      <View style={sx.leftContent}>
        <View style={[sx.indicator, { backgroundColor: color }]} />
        <Text style={sx.label}>{label}</Text>
      </View>
      <Text style={sx.value}>{value}</Text>
    </View>
  );
};

const sx = StyleSheet.create({
  __: {},
  container: {
    ...flexStyles.rowCenterBetween,
  },
  leftContent: {
    ...flexStyles.rowCenterStart,
    gap: 16,
  },
  indicator: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    width: 8,
    height: 8,
  },
  label: {
    color: COLORS.black,
    ...textStyles.bodyLarge,
  },
  value: {
    color: COLORS.black,
    ...textStyles.bodyLarge,
  },
});
