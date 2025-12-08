import { COLORS } from "@/constants/COLORS";
import { View, Text, Dimensions } from "react-native";
import { BarChart, barDataItem } from "react-native-gifted-charts";

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

type DataType = {
  value: number;
  label?: string;
  frontColor?: string;
  labelWidth?: 40;
  spacing?: 4;
};

interface Props {
  data?: DataType;
}
const screenWidth = Dimensions.get("window").width;

export const ClusteredColumnChart: React.FC<Props> = ({ data = [] }) => {
  const renderTitle = () => {
    return (
      <View style={{ margin: 0, borderWidth: 0 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            // paddingBottom: 16, 1````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
            // marginTop: 24,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 12,
                backgroundColor: "#177AD5",
                // marginRight: 8,
              }}
            />
            <Text
              style={{
                // width: 60,
                // height: 16,
                color: COLORS.icon,
              }}
            >
              Insured
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "#ED6665",
                marginRight: 8,
              }}
            />
            <Text
              style={{
                width: 60,
                height: 16,
                color: "lightgray",
              }}
            >
              Claims
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flexDirection: "row", overflow: "hidden" }}>
      <View style={{ marginRight: 0 }}>
        {[100, 75, 50, 25, 0].map((val) => (
          <Text
            key={val}
            style={{ color: COLORS.icon, height: 50, borderWidth: 0 }}
          >
            {val}
            <Text style={{ color: "#ddd" }}> - -</Text>
          </Text>
        ))}
      </View>

      <BarChart
        data={barData}
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
  );
};
