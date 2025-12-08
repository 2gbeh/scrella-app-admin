import { memo } from "react";
import { View, Text, Dimensions, ColorValue } from "react-native";
import { BarChart, barDataItem } from "react-native-gifted-charts";
//
import { ChartLegend } from "../chart-legend";
import { COLORS } from "@/constants/COLORS";
//
import { clusteredColumnChartStyles as sx } from "./styles.module";

type DataType = {
  value?: number;
  label?: string;
  frontColor?: ColorValue;
  labelWidth?: 40;
  spacing?: 4;
};

interface Props {
  data?: barDataItem[];
  keys?: { label: string; color?: string }[];
}

const screenWidth = Dimensions.get("window").width;

const ClusteredColumnChart: React.FC<Props> = ({ data = [], keys = [] }) => {
  return (
    <View style={sx.container}>
      {keys ? <ChartLegend data={keys} /> : null}
      {/*  */}
      <View style={sx.content}>
        <View>
          {[100, 75, 50, 25, 0].map((val) => (
            <Text key={val} style={sx.yAxisLabel}>
              {val}
              <Text style={sx.yAxisLabelRuler}>- -</Text>
            </Text>
          ))}
        </View>
        {/*  */}
        <BarChart
          data={data}
          maxValue={100}
          noOfSections={4}
          width={screenWidth}
          barWidth={16}
          roundedTop
          hideYAxisText
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
