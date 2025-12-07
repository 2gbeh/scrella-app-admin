import { StyleSheet, Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
//
import { textStyles } from "@/styles/text.style";
import { flexStyles } from "@/styles/flex.style";
import { shadowMixinStyles } from "@/styles/common.style";
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";

interface Props {
  label: string;
  value: string | number;
  icon: string;
  color: string;
}

export const KpiCard: React.FC<Props> = ({ label, value, icon, color }) => {
  return (
    <View style={[sx.container, { backgroundColor: color }]}>
      <View style={sx.iconWrapper}>
        <FontAwesome6
          name={icon}
          color={COLORS.icon}
          size={SIZES.appBarAvatarText}
        />
      </View>
      <View style={sx.content}>
        <Text style={sx.value}>{value}</Text>
        <Text style={sx.label}>{label}</Text>
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
    borderRadius: 12,
    paddingTop: 24,
    paddingBottom: 16,
    ...flexStyles.centerCenter,
    gap: 16,
    ...shadowMixinStyles(),
  },
  iconWrapper: {
    backgroundColor: COLORS.background,
    borderRadius: SIZES.iconContainer,
    width: SIZES.iconContainer,
    height: SIZES.iconContainer,
    ...flexStyles.centerCenter,
  },
  content: {
    alignItems: "center",
    gap: 2,
  },
  value: {
    color: COLORS.white,
    ...textStyles.titleLargeBold,
  },
  label: {
    color: COLORS.white,
    ...textStyles.bodyMedium,
    opacity: 0.9,
  },
});
