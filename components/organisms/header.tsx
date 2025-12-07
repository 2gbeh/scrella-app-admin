import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
//
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";

export const Header: React.FC = () => {
  const router = useRouter();
  //
  return (
    <View style={sx.container}>
      <View style={sx.leftContent}>
        <Pressable onPress={router.back} style={sx.iconContainer}>
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
  __: {
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 4,
    height: SIZES.appBarContainer,
    ...flexStyles.rowCenterBetween,
  },
  leftContent: {
    ...flexStyles.rowCenterStart,
  },
  rightContent: {
    ...flexStyles.rowCenterStart,
  },
  title: {
    color: COLORS.black,
    ...textStyles.titleMedium,
    fontFamily: "Poppins-Regular",
  },
  iconContainer: {
    width: SIZES.iconContainer,
    height: SIZES.iconContainer,
    ...flexStyles.centerCenter,
  },
});
