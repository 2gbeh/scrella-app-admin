import ClusteredColumnChart from "@/components/atoms/charts/clustered-column-chart";
import { Card } from "@/components/atoms/card";
import { COLORS } from "@/constants/COLORS";
//
import data from "./data.json";

export const DashboardColumnChart: React.FC = () => {
  return (
    <Card title="Insured & Claims Analysis">
      <ClusteredColumnChart
        data={data}
        keys={[
          { label: "Insured", color: COLORS.primary },
          { label: "Claims", color: COLORS.primaryContainer },
        ]}
      />
    </Card>
  );
};
