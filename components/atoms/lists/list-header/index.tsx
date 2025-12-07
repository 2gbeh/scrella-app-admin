import { PropsWithChildren } from "react";
import { View, Text, Pressable } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
//
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";
//
import { listHeaderStyles as sx } from "./styles.module";

interface ContainerProps extends PropsWithChildren {
  title: string;
}

export const Container: React.FC<ContainerProps> = ({ children, title }) => {
  return (
    <View style={sx.section}>
      <Text style={sx.title}>{title}</Text>
      {children}
    </View>
  );
};

interface SeeAllProps extends PropsWithChildren {
  label?: string;
  icon?: string;
  onClick?: VoidFunction;
}

export const SeeAll: React.FC<SeeAllProps> = ({
  label = "See all",
  icon = "chevron-right",
  onClick = () => undefined,
}) => {
  return (
    <Pressable onPress={onClick} style={sx.subtitleWrapper}>
      <Text style={sx.subtitle}>{label}</Text>
      <FontAwesome6
        name={icon}
        size={SIZES.appBarAvatarText}
        color={COLORS.icon}
      />
    </Pressable>
  );
};
