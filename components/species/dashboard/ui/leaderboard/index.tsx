import { StyleSheet, View } from "react-native";
//
import { LeaderboardItem } from "@/components/atoms/charts/leaderboard-item";
import { moneyFormat } from "@/utils";
import data from "./data.json";

export const Leaderboard: React.FC = () => {
  return (
    <View style={sx.container}>
      {data.map((item, i) => (
        <LeaderboardItem
          key={i}
          label={item.name}
          value={moneyFormat(item.units)}
          color={item.color}
        />
      ))}
    </View>
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
