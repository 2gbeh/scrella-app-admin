import { StyleSheet, View } from "react-native";
//
import { Card } from "@/components/atoms/card";
import { Leaderboard } from "@/components/atoms/charts/leaderboard";
import { ToggleTabs } from "@/components/atoms/toggle-tabs";
import { moneyFormat } from "@/utils";
//
import data from "./data.json";

export const DashboardLeaderboard: React.FC = () => {
  return (
    <Card
      title="Operating Systems"
      rightContent={<ToggleTabs data={["Focused", "Other"]} />}
    >
      <View style={sx.container}>
        {data.map((item, i) => (
          <Leaderboard
            key={i}
            label={item.name}
            value={moneyFormat(item.units)}
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
