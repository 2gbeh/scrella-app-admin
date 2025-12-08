import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
//
import { KpiCard } from "@/components/atoms/charts/kpi-card";
import { moneyFormat, sleep } from "@/utils";
import { flexStyles } from "@/styles/flex.style";
//
import { data } from "./utils";

export const KpiCards: React.FC = () => {
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
            value={data.customers.total.toLocaleString()}
            icon={data.customers.icon}
            color={data.customers.color}
            loading={loading}
          />
        </View>
        <View style={sx.gridItem}>
          <KpiCard
            label={data.devices.name}
            value={data.devices.total.toLocaleString()}
            icon={data.devices.icon}
            color={data.devices.color}
            loading={loading}
          />
        </View>
      </View>
      <View style={sx.grid}>
        <View style={sx.gridItem}>
          <KpiCard
            label={data.revenue.name}
            value={moneyFormat(data.revenue.total)}
            icon={data.revenue.icon}
            color={data.revenue.color}
            loading={loading}
          />
        </View>
        <View style={sx.gridItem}>
          <KpiCard
            label={data.claims.name}
            value={moneyFormat(data.claims.total)}
            icon={data.claims.icon}
            color={data.claims.color}
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
