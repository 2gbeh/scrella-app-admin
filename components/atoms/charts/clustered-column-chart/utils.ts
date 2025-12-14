import { ChartLegendData } from "../chart-legend";
import { COLORS } from "@/constants/COLORS";

type DataItemType = {
  name: string;
  value: number;
};

type ChartDataType = {
  label?: string;
  value: number;
  frontColor: string;
  labelWidth?: number;
  spacing?: number;
};

export interface ClusteredColumnChartProps {
  data: Record<string, DataItemType[]>;
  keys?: ChartLegendData;
  labelWidth?: number;
  spacing?: number;
  hideKeys?: boolean;
}

export function transform({
  data,
  keys = {},
  labelWidth = 40,
  spacing = 4 }: ClusteredColumnChartProps) {
  const transformed: ChartDataType[] = [];
  let maxValue = 0;

  Object.entries(data).map(([label, list]) => {
    list.map(({ name, value }, j) => {
      if (value >= maxValue) maxValue = value
      // 
      if (j < 1) {
        transformed.push({
          value,
          label,
          frontColor: keys[name] || COLORS.primary,
          labelWidth,
          spacing,
        });
      } else {
        transformed.push({
          value,
          frontColor: keys[name] || COLORS.primaryContainer,
        });
      }
    });
  });

  const maxValueSafe = Math.ceil(maxValue / 10) * 10
  const dataPadRight = [{ "value": 0 }, { "value": 0 }, { "value": 0 }]

  return {
    maxValue,
    maxValueSafe,
    chartData: [...transformed, ...dataPadRight],
  }
}
