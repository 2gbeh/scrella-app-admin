import { Suspense, lazy } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
//
import { AppBar } from "@/components/organisms/app-bar";
import { Card } from "@/components/atoms/card";
import { ClusteredColumnChart_ } from "@/components/species/dashboard/components/clustered-column-chart";
import { DonutChart } from "@/components/species/dashboard/components/donut-chart";
import { Skeleton } from "@/components/atoms/skeleton";
import { Spinner } from "@/components/atoms/spinner";
import { COLORS } from "@/constants/COLORS";
// 
import { KpiCards } from "@/components/species/dashboard/components/kpi-cards";

const LazyLeaderboard = lazy(() =>
  import("@/components/species/dashboard/components/leaderboard").then((mod) => ({
    default: () => (
      <Card title="Operating Systems Insured">
        <mod.Leaderboard />
      </Card>
    ),
  }))
);

export default function DashboardScreen() {
  return (
    <View style={sx.container}>
      <AppBar />
      <ScrollView style={{ flex: 1 }}>
        <View style={sx.content}>
          <KpiCards />
          <Card title="Insured & Claims Trend">
            <ClusteredColumnChart_ />
          </Card>
          {/* <Card title="Devices Insured">
            <DonutChart />
          </Card> */}
          <Suspense fallback={<Skeleton h={160} r={12} />}>
            <LazyLeaderboard />
          </Suspense>
        </View>
      </ScrollView>
    </View>
  );
}

const sx = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 16,
  },
});
