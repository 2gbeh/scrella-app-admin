import { StyleSheet, View } from "react-native";
//
import { KpiCard } from "@/components/atoms/charts/kpi-card";
import { flexStyles } from "@/styles/flex.style";
import { COLORS } from "@/constants/COLORS";
import { moneyFormat } from "@/utils";

const data = {
  customers: {
    name: "Customers",
    total: 550000,
    icon: "user-group",
    color: COLORS.statusBlue,
  },
  devices: {
    name: "Devices",
    total: 800000,
    icon: "computer",
    color: COLORS.statusYellow,
  },
  revenue: {
    name: "Revenue",
    total: 1350000,
    icon: "credit-card-alt",
    color: COLORS.statusPurple,
  },
  claims: {
    name: "Claims",
    total: 0,
    icon: "money-check-dollar",
    color: COLORS.statusRed,
  },
};

export const KpiCards: React.FC = () => {
  return (
    <View style={sx.container}>
      <View style={sx.grid}>
        <View style={sx.gridItem}>
          <KpiCard
            label={data.customers.name}
            value={data.customers.total.toLocaleString()}
            icon={data.customers.icon}
            color={data.customers.color}
          />
        </View>
        <View style={sx.gridItem}>
          <KpiCard
            label={data.devices.name}
            value={data.devices.total.toLocaleString()}
            icon={data.devices.icon}
            color={data.devices.color}
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
          />
        </View>
        <View style={sx.gridItem}>
          <KpiCard
            label={data.claims.name}
            value={moneyFormat(data.claims.total)}
            icon={data.claims.icon}
            color={data.claims.color}
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
