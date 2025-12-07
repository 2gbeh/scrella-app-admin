import { StyleSheet, View, Text } from "react-native";
//
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { COLORS } from "@/constants/COLORS";

export default function SettingsScreen() {
  return (
    <View style={sx.container}>
      <Text style={sx.heading}>SettingsScreen</Text>
    </View>
  );
}

const sx = StyleSheet.create({
  container: {
    ...flexStyles.centered,
  },
  heading: {
    color: COLORS.black,
    ...textStyles.bodyLarge,
  },
});
