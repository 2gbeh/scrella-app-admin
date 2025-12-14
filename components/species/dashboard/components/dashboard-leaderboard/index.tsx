import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
//
import { Card } from "@/components/atoms/card";
import { Leaderboard } from "@/components/atoms/charts/leaderboard";
import { ToggleTabs } from "@/components/atoms/toggle-tabs";
import { moneyFormat } from "@/utils";
//
import data from "./data.json";

export const DashboardLeaderboard: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [chartData, setChartData] = useState<typeof data>([]);

  const selectedField = tabIndex ? "units" : "revenue";

  useEffect(() => {
    if (data.length) {
      const newChartData = data.toSorted(
        (a, b) => b[selectedField] - a[selectedField]
      );
      setChartData(newChartData);
    }
  }, [selectedField]);
  //
  return (
    <Card
      title="Operating Systems"
      rightContent={
        <ToggleTabs
          data={["Revenue", "Units"]}
          value={tabIndex}
          onChange={setTabIndex}
        />
      }
    >
      <View style={sx.container}>
        {chartData.map((item, i) => (
          <Leaderboard
            key={i}
            label={item.name}
            value={moneyFormat(item[selectedField], Boolean(tabIndex))}
            color={item.color}
          />
        ))}
      </View>
    </Card>
  );
};

const sx = StyleSheet.create({
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    gap: 16,
  },
});
