import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
//
import { AppBar } from "@/components/organisms/app-bar";
import { Card } from "@/components/atoms/card";
import { ClusteredColumnChart } from "@/components/species/dashboard/ui/clustered-column-chart";
import { DonutChart } from "@/components/species/dashboard/ui/donut-chart";
import { Header } from "@/components/organisms/header";
import { Leaderboard } from "@/components/species/dashboard/ui/leaderboard";
import { ListItem } from "@/components/species/customers/ui/list-item";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={sx.container}>
      <AppBar />
      <Header />
      <View>
        <ListItem />
        <ListItem />
      </View>
      <View style={sx.content}>
        <Card title="Insured & Claims Trend">
          <ClusteredColumnChart />
        </Card>
        <Card title="Devices Insured">
          <DonutChart />
        </Card>
        <Card title="Operating Systems Insured">
          <Leaderboard />
        </Card>
      </View>
    </View>
  );
}

const sx = StyleSheet.create({
  container: {
    gap: 16,
  },
  content: {
    padding: 16,
    gap: 16,
  },
});
