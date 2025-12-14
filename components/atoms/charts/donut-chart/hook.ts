import { useState, useEffect } from "react";
import { ChartLegendData } from "../chart-legend";

type DataItemType = {
  name: string;
  value: number;
};

type ChartDataType = {
  value: number;
  color: string;
  focused?: boolean;
};

type ChartMetaDataType = {
  maxValue: number;
  totalValue: number;
  index: number;
};

const initialChartMetaData: ChartMetaDataType = {
  maxValue: 0,
  totalValue: 0,
  index: 0,
};

export interface DonutChartProps {
  data: DataItemType[];
  keys?: ChartLegendData;
}

export function useDonutChart({ data, keys = {} }: DonutChartProps) {
  const [chartData, setChartData] = useState<ChartDataType[]>([]);
  const [chartMetaData, setChartMetaData] =
    useState<ChartMetaDataType>(initialChartMetaData);

  const selectedLabel = data[chartMetaData.index].name
  const selectedValueRate = Math.round(
    (chartMetaData.maxValue * 100) / chartMetaData.totalValue
  );

  useEffect(() => {
    if (data.length) {
      const newChartData: ChartDataType[] = []
      let maxValue = 0;
      let totalValue = 0;
      let index = 0;

      data.forEach(({ name, value }, i) => {
        if (value >= maxValue) {
          index = i;
          maxValue = value;
        }
        totalValue += value;
        newChartData.push({ value, color: keys[name] });
      });
      // 
      setChartData(newChartData);
      setChartMetaData({ maxValue, totalValue, index });
    }
  }, [data, keys]);

  const handleSelect = (item: ChartDataType, index: number) => {
    setChartMetaData((prev) => ({ ...prev, index, maxValue: item.value }));
  };

  return {
    chartData,
    selectedLabel,
    selectedValueRate,
    handleSelect
  }
}