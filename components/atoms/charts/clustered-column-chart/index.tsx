import { memo } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";
//
import { ChartLegend } from "../chart-legend";
import { COLORS } from "@/constants/COLORS";
//
import { ClusteredColumnChartProps, transform } from "./utils";

const screenWidth = Dimensions.get("window").width;

const ClusteredColumnChart: React.FC<ClusteredColumnChartProps> = (props) => {
  const { maxValueSafe, chartData } = transform(props);
  //
  return (
    <View style={sx.container}>
      {props.keys && !props.hideKeys ? <ChartLegend data={props.keys} /> : null}
      {/*  */}
      <View style={sx.content}>
        <BarChart
          data={chartData}
          maxValue={maxValueSafe}
          noOfSections={4}
          width={screenWidth}
          barWidth={16}
          roundedTop
          // hideYAxisText
          xAxisThickness={1}
          yAxisThickness={0}
          xAxisLabelTextStyle={{ color: COLORS.icon }}
          spacing={16}
          initialSpacing={4}
          endSpacing={0}
        />
      </View>
    </View>
  );
};

export default memo(ClusteredColumnChart);

const sx = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    gap: 16,
  },
  content: {
    flexDirection: "row",
    overflow: "hidden",
  },
  yAxisLabel: {
    color: COLORS.icon,
    height: 50,
  },
  yAxisLabelRuler: {
    color: "#ddd",
    paddingLeft: 8,
  },
});
