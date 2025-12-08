import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/COLORS";

export const clusteredColumnChartStyles = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    gap: 16
  },
  content: {
    flexDirection: "row",
    overflow: "hidden"
  },
  yAxisLabel: {
    color: COLORS.icon,
    height: 50,
  },
  yAxisLabelRuler: {
    color: '#ddd',
    paddingLeft: 8,
  },
});
