import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
//
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";

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
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    height: SIZES.appBarContainer,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  // title medium
  title: {
    color: COLORS.black,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  iconContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    width: SIZES.iconContainer,
    height: SIZES.iconContainer,
    alignItems: "center",
    justifyContent: "center",
  },
});
