import { memo } from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
//
import { ChartLegend } from "@/components/atoms/charts/chart-legend";
import { COLORS } from "@/constants/COLORS";

type DataType = {
  value: number;
  color?: string;
  focused?: boolean;
};

interface Props {
  data?: DataType[];
  keys?: { label: string; color?: string }[];
  centerValue?: string;
  centerLabel?: string;
}

const DonutChart: React.FC<Props> = ({
  data = [],
  keys = [],
  centerValue,
  centerLabel,
}) => {
  return (
    <View style={{ alignItems: "center", gap: 16 }}>
      <PieChart
        donut
        data={data}
        showGradient
        sectionAutoFocus
        radius={90}
        innerRadius={60}
        centerLabelComponent={() => (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {centerValue ? (
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                {centerValue}
              </Text>
            ) : null}
            {centerLabel ? (
              <Text style={{ color: COLORS.black, fontSize: 14 }}>
                {centerLabel}
              </Text>
            ) : null}
          </View>
        )}
      />
      {keys ? <ChartLegend data={keys} /> : null}
    </View>
  );
};

export default memo(DonutChart);
