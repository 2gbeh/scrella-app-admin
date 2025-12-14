import DonutChart from "@/components/atoms/charts/donut-chart";
import { COLORS } from "@/constants/COLORS";
import { Card } from "@/components/atoms/card";
import data from "./data.json";

export const DashboardDonutChart = () => {
  return (
    <Card title="Devices Insured">
      <DonutChart
        data={data}
        keys={{
          Desktop: COLORS.statusYellow,
          Laptop: COLORS.statusRed,
          Tablet: COLORS.statusPurple,
          Mobile: COLORS.statusBlue,
        }}
      />
    </Card>
  );
};
