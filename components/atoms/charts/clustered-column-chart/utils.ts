import { barDataItem } from "react-native-gifted-charts";
import { ChartLegendData } from "../chart-legend";
import { COLORS } from "@/constants/COLORS";

/**
 * @example
 // data
{
  "Jan": { "Revenue": 1600000, "Expense": 850000 },
  "Feb": { "Revenue": 800000, "Expense": 550000 },
    ...
 }
 // result
[
  {
    value: 1600000,
    label: "Jan",
    frontColor: "teal",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 850000, frontColor: "coral" },
  {
    value: 800000,
    label: "Feb",
    frontColor: "teal",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 550000, frontColor: "coral" },
  ...
]
*/

type KeyValueType = { label: string; color: string };

type DataValueType = Record<string, number>;

export interface ClusteredColumnChartProps {
  data: Record<string, DataValueType>;
  keys?: ChartLegendData;
  labelWidth?: number;
  spacing?: number;
  hideKeys?: boolean;
}

export function transform({
  data,
  keys,
  labelWidth = 40,
  spacing = 4 }: ClusteredColumnChartProps) {
  let maxValue = 1;
  const transformed: barDataItem[] = [];

  Object.entries(data).map(([label, item]) => {
    Object.entries(item).map(([key, value], i) => {
      if (value > maxValue) maxValue = value
      if (i < 1) {
        const frontColor = colors[i] || COLORS.primary
        // 
        transformed.push({
          value,
          label,
          frontColor,
          labelWidth,
          spacing,
        });
        // 
        if (!transformedKeys[key]) {
          transformedKeys[key] = { label: key, color: frontColor }
        }
      } else {
        const frontColor = colors[i] || COLORS.primaryContainer
        // 
        transformed.push({
          value,
          frontColor,
        });
        // 
        if (!transformedKeys[key]) {
          transformedKeys[key] = { label: key, color: frontColor }
        }
      }
    });
  });

  const maxValueSafe = Math.ceil(maxValue / 10) * 10
  const dataPadRight = [{ "value": 0 }, { "value": 0 }, { "value": 0 }]

  return {
    maxValue,
    maxValueSafe,
    data: [...transformed, ...dataPadRight],
  }
}
