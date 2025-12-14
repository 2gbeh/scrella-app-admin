import { StyleSheet, View, Text } from "react-native";
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { COLORS } from "@/constants/COLORS";

export type ChartLegendData = Record<string, string>;

interface Props {
  data: Record<string, string>;
}

export const ChartLegend: React.FC<Props> = ({ data }) => (
  <View style={sx.container}>
    {Object.entries(data).map(([label, color], i) => (
      <View key={i} style={sx.content}>
        <View style={[sx.indicator, { backgroundColor: color }]} />
        <Text style={sx.label}>{label}</Text>
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
    flexWrap: "wrap",
    gap: 16,
  },
  content: {
    ...flexStyles.rowCenterStart,
    gap: 8,
  },
  indicator: {
    backgroundColor: COLORS.icon,
    borderRadius: 10,
    width: 10,
    height: 10,
  },
  label: {
    color: COLORS.icon,
    ...textStyles.labelMedium,
  },
});
