import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";
//
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";
import { flexStyles } from "@/styles/flex";
import { textStyles } from "@/styles/text";

export const Header: React.FC = () => {
  return (
    <View style={sx.container}>
      <View style={sx.leftContent}>
        <Pressable style={sx.iconContainer}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={SIZES.icon}
            color={COLORS.icon}
          />
        </Pressable>
        <Text style={sx.title}>Customers</Text>
      </View>
      <View style={sx.rightContent}>
        <Pressable style={sx.iconContainer}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={SIZES.icon}
            color={COLORS.icon}
          />
        </Pressable>
      </View>
    </View>
  );
};

const sx = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 4,
    height: SIZES.appBarContainer,
    ...flexStyles.rowCenterBetween,
  },
  leftContent: {
    // borderWidth: 1,
    // borderColor: "red",
    ...flexStyles.rowCenterStart,
  },
  rightContent: {
    // borderWidth: 1,
    // borderColor: "red",
    ...flexStyles.rowCenterStart,
  },
  title: {
    color: COLORS.black,
    ...textStyles.titleMedium,
  },
  iconContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    width: SIZES.iconContainer,
    height: SIZES.iconContainer,
    ...flexStyles.centerCenter,
  },
});
