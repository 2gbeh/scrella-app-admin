import { PropsWithChildren } from "react";
import { ActivityIndicator } from "react-native";
import { COLORS } from "@/constants/COLORS";

interface Props extends PropsWithChildren {
  large?: boolean;
  secondary?: boolean;
}

export const Spinner: React.FC<Props> = ({ large, secondary }) => {
  return (
    <ActivityIndicator
      size={24}
      color={secondary ? COLORS.white : COLORS.primary}
    />
  );
};
