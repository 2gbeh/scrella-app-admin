import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
//
import { AppBar } from "@/components/organisms/app-bar";
import { ListItem } from "@/components/species/customers/ui/list-item";
import { ClusteredColumnChart } from "@/components/species/dashboard/ui/clustered-column-chart";
import { DonutChart } from "@/components/species/dashboard/ui/donut-chart";
import { ListBarChart } from "@/components/species/dashboard/ui/list-bar-chart";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View>
      <AppBar />
      <ListItem />
      <ListItem />
      <ClusteredColumnChart />
      <DonutChart />
      <ListBarChart />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
