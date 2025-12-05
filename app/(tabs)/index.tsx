import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
//
import { AppBar } from "@/components/organisms/app-bar";
import { Header } from "@/components/organisms/header";
import { ListItem } from "@/components/species/customers/ui/list-item";
import { ClusteredColumnChart } from "@/components/species/dashboard/ui/clustered-column-chart";
import { DonutChart } from "@/components/species/dashboard/ui/donut-chart";
import { ListBarChart } from "@/components/species/dashboard/ui/list-bar-chart";

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
      <ClusteredColumnChart />
      <DonutChart />
      <ListBarChart />
    </View>
  );
}

const sx = StyleSheet.create({
  container: {
    gap: 16,
  },
});
