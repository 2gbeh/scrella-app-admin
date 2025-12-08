import { View, Text, Dimensions } from "react-native";
import { BarChart, barDataItem } from "react-native-gifted-charts";
//
import ClusteredColumnChart from "@/components/atoms/charts/clustered-column-chart";
import { COLORS } from "@/constants/COLORS";

const barData: barDataItem[] = [
  {
    value: 40,
    label: "Jan",
    frontColor: "#00b39e",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 20, frontColor: "#ddecea" },
  {
    value: 50,
    label: "Feb",
    frontColor: "#00b39e",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 40, frontColor: "#ddecea" },
  {
    value: 75,
    label: "Mar",
    frontColor: "#00b39e",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 25, frontColor: "#ddecea" },
  {
    value: 30,
    label: "Apr",
    frontColor: "#00b39e",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 20, frontColor: "#ddecea" },
  {
    value: 60,
    label: "May",
    frontColor: "#00b39e",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 40, frontColor: "#ddecea" },
  {
    value: 65,
    label: "Jun",
    frontColor: "#00b39e",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 30, frontColor: "#ddecea" },
  {
    value: 55,
    label: "Jul",
    frontColor: "#00b39e",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 35, frontColor: "#ddecea" },
  {
    value: 70,
    label: "Aug",
    frontColor: "#00b39e",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 45, frontColor: "#ddecea" },
  {
    value: 48,
    label: "Sep",
    frontColor: "#00b39e",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 28, frontColor: "#ddecea" },
  {
    value: 62,
    label: "Oct",
    frontColor: "#00b39e",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 42, frontColor: "#ddecea" },
  {
    value: 58,
    label: "Nov",
    frontColor: "#00b39e",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 38, frontColor: "#ddecea" },
  {
    value: 72,
    label: "Dec",
    frontColor: "#00b39e",
    labelWidth: 40,
    spacing: 4,
  },
  { value: 50, frontColor: "#ddecea" },
  // padding
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
];

export const ClusteredColumnChart_: React.FC = () => {
  return (
    <ClusteredColumnChart
      data={barData}
      keys={[
        { label: "Insured", color: COLORS.primary },
        { label: "Claims", color: COLORS.primaryContainer },
      ]}
    />
  );
};
