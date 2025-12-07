import { Suspense } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
//
import { AppBar } from "@/components/organisms/app-bar";
import { Card } from "@/components/atoms/card";
import { ClusteredColumnChart } from "@/components/species/dashboard/ui/clustered-column-chart";
import { DonutChart } from "@/components/species/dashboard/ui/donut-chart";
import { KpiCards } from "@/components/species/dashboard/ui/kpi-cards";
import { Leaderboard } from "@/components/species/dashboard/ui/leaderboard";
import { Skeleton } from "@/components/atoms/skeleton";
import { Spinner } from "@/components/atoms/spinner";
import { COLORS } from "@/constants/COLORS";

export default function DashboardScreen() {
  return (
    <View style={sx.container}>
      <AppBar />
      <ScrollView style={{ flex: 1 }}>
        <View style={sx.content}>
          <KpiCards />
          <Card title="Insured & Claims Trend">
            <ClusteredColumnChart />
          </Card>
          <Card title="Devices Insured">
            <DonutChart />
          </Card>
          <Suspense fallback={<Skeleton h={160} r={12} />}>
            <Card title="Operating Systems Insured">
              <Leaderboard />
            </Card>
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
