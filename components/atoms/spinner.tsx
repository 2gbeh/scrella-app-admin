import { PropsWithChildren } from "react";
import { ActivityIndicator } from "react-native";
import { COLORS } from "@/constants/COLORS";

interface Props extends PropsWithChildren {
  size?: number;
  secondary?: boolean;
}

export const Spinner: React.FC<Props> = ({ size = 24, secondary }) => {
  return (
    <ActivityIndicator
      size={size}
      color={secondary ? COLORS.white : COLORS.primary}
    />
  );
};
