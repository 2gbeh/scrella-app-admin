import DonutChart from "@/components/atoms/charts/donut-chart";
import { COLORS } from "@/constants/COLORS";
import { Card } from "@/components/atoms/card";

const data = [
  {
    value: 47,
    color: COLORS.statusPurple,
    focused: true,
  },
  { value: 40, color: COLORS.statusBlue },
  { value: 16, color: COLORS.statusRed },
  { value: 3, color: COLORS.statusYellow },
];

const keys = [
  { label: "Desktop", color: COLORS.statusYellow },
  { label: "Laptop", color: COLORS.statusBlue },
  { label: "Tablet", color: COLORS.statusRed },
  { label: "Mobile", color: COLORS.statusPurple },
];

export const DashboardDonutChart = () => {
  return (
    <Card title="Devices Insured">
      <DonutChart data={data} keys={keys} centerLabel="Mobile" centerValue="60%" />
    </Card>
  );
};
