import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
//
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";
import { flexStyles } from "@/styles/flex";
import { textStyles } from "@/styles/text";

export const AppBar: React.FC = () => {
  return (
    <View style={sx.container}>
      <View style={sx.leftContent}>
        <Text style={sx.title}>Hi, Administrator</Text>
      </View>
      <View style={sx.rightContent}>
        <Pressable style={sx.iconContainer}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={SIZES.icon}
            color={COLORS.icon}
          />
          <View style={sx.indicator} />
        </Pressable>
        <Image
          source={require("@/assets/images/my-avatar.png")}
          style={{
            width: SIZES.appBarAvatar,
            height: SIZES.appBarAvatar,
            borderRadius: SIZES.appBarAvatar,
          }}
        />
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
    paddingHorizontal: 16,
    height: SIZES.appBarContainer,
    ...flexStyles.rowCenterBetween,
    gap: 8,
  },
  leftContent: {
    ...flexStyles.rowCenterStart,
    gap: 8,
  },
  rightContent: {
    ...flexStyles.rowCenterStart,
    gap: 8,
  },
  title: {
    color: COLORS.black,
    ...textStyles.titleMedium,
  },
  iconContainer: {
    width: SIZES.iconContainer,
    height: SIZES.iconContainer,
    ...flexStyles.centerCenter,
  },
  indicator: {
    backgroundColor: "red",
    borderRadius: 8,
    width: 8,
    height: 8,
    position: "absolute",
    top: 15,
    right: 15,
  },
});
