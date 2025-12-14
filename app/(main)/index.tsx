import { Suspense, lazy } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
//
import { AppBar } from "@/components/organisms/app-bar";
import { Skeleton } from "@/components/atoms/skeleton";
import { COLORS } from "@/constants/COLORS";
//
import { DashboardColumnChart } from "@/components/species/dashboard/components/dashboard-column-chart";
import { DashboardKpiCards } from "@/components/species/dashboard/components/dashboard-kpi-cards";

const LazyDashboardDonutChart = lazy(() =>
  import("@/components/species/dashboard/components/dashboard-donut-chart").then(
    (mod) => ({
      default: () => <mod.DashboardDonutChart />,
    })
  )
);

const LazyDashboardLeaderboard = lazy(() =>
  import(
    "@/components/species/dashboard/components/dashboard-leaderboard"
  ).then((mod) => ({
    default: () => <mod.DashboardLeaderboard />,
  }))
);

export default function DashboardScreen() {
  return (
    <View style={sx.container}>
      <AppBar />
      <ScrollView style={{ flex: 1 }}>
        <View style={sx.content}>
          <DashboardKpiCards />
          {/* <DashboardColumnChart />
          <Suspense fallback={<Skeleton h={160} r={12} />}>
            <LazyDashboardDonutChart />
          </Suspense> */}
          <Suspense fallback={<Skeleton h={160} r={12} />}>
            <LazyDashboardLeaderboard />
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
