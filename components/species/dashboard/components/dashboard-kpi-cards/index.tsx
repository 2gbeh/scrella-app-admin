import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
//
import { KpiCard } from "@/components/atoms/charts/kpi-card";
import { moneyFormat, sleep } from "@/utils";
import { flexStyles } from "@/styles/flex.style";
import { COLORS } from "@/constants/COLORS";
//
import data from "./data.json";

export const DashboardKpiCards: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await sleep();
      setLoading(false);
    })();
  }, []);
  //
  return (
    <View style={sx.container}>
      <View style={sx.grid}>
        <View style={sx.gridItem}>
          <KpiCard
            label={data.customers.name}
            value={moneyFormat(data.customers.total, true)}
            icon="user-group"
            color={COLORS.statusBlue}
            loading={loading}
          />
        </View>
        <View style={sx.gridItem}>
          <KpiCard
            label={data.devices.name}
            value={moneyFormat(data.devices.total, true)}
            icon="computer"
            color={COLORS.statusYellow}
            loading={loading}
          />
        </View>
      </View>
      <View style={sx.grid}>
        <View style={sx.gridItem}>
          <KpiCard
            label={data.revenue.name}
            value={moneyFormat(data.revenue.total)}
            icon="credit-card-alt"
            color={COLORS.statusPurple}
            loading={loading}
          />
        </View>
        <View style={sx.gridItem}>
          <KpiCard
            label={data.claims.name}
            value={moneyFormat(data.claims.total)}
            icon="money-check-dollar"
            color={COLORS.statusRed}
            loading={loading}
          />
        </View>
      </View>
    </View>
  );
};

const sx = StyleSheet.create({
  __: {
    // borderWidth: 1,
    // borderColor: "red",
  },
  container: {
    gap: 16,
  },
  grid: {
    ...flexStyles.rowCenterBetween,
    gap: 16,
  },
  gridItem: {
    flex: 1,
  },
});
