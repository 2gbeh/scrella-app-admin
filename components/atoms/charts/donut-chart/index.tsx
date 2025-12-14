import { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";
//
import { ChartLegend } from "@/components/atoms/charts/chart-legend";
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { COLORS } from "@/constants/COLORS";
//
import { DonutChartProps, useDonutChart } from "./hook";

const DonutChart: React.FC<DonutChartProps> = ({ data, keys = {} }) => {
  const { chartData, selectedLabel, selectedValueRate, handleSelect } =
    useDonutChart({
      data,
      keys,
    });

  const renderCenterLabelComponent = () =>
    selectedValueRate ? (
      <View style={sx.content}>
        <Text style={sx.value}>
          {selectedValueRate}
          <Text style={sx.rate}>%</Text>
        </Text>
        <Text style={sx.label}>{selectedLabel}</Text>
      </View>
    ) : undefined;

  return (
    <View style={sx.container}>
      <PieChart
        donut
        data={chartData}
        onPress={handleSelect}
        // focusOnPress
        showGradient
        radius={90}
        innerRadius={60}
        centerLabelComponent={renderCenterLabelComponent}
      />
      {keys ? <ChartLegend data={keys} /> : null}
    </View>
  );
};

export default memo(DonutChart);

const sx = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    alignItems: "center",
    gap: 16,
  },
  content: {
    ...flexStyles.centerCenter,
  },
  label: {
    color: COLORS.black,
    ...textStyles.bodyMedium,
  },
  value: {
    color: COLORS.black,
    ...textStyles.titleLargeBold,
  },
  rate: {
    color: COLORS.black,
    marginLeft: 2,
    ...textStyles.bodyMedium,
  },
});
