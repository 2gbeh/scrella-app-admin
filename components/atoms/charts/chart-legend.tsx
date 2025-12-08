import { StyleSheet, View, Text } from "react-native";
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { COLORS } from "@/constants/COLORS";

interface Props {
  data?: { label: string; color?: string }[];
}

export const ChartLegend: React.FC<Props> = ({ data = [] }) => (
  <View style={sx.container}>
    {data.map((item, i) => (
      <View key={i} style={sx.content}>
        <View style={[sx.indicator, { backgroundColor: item.color }]} />
        <Text style={sx.label}>{item.label}</Text>
      </View>
    ))}
  </View>
);

export const sx = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    ...flexStyles.rowCenterEvenly,
  },
  content: {
    ...flexStyles.rowCenterStart,
    gap: 8,
  },
  indicator: {
    backgroundColor: COLORS.icon,
    borderRadius: 12,
    width: 12,
    height: 12,
  },
  label: {
    color: COLORS.icon,
    ...textStyles.labelMedium,
  },
});
