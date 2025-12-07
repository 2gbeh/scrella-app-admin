import { StyleSheet, View, Text, Pressable } from "react-native";
import { useRouter, usePathname } from "expo-router";
//
import { flexStyles } from "@/styles/flex.style";
import { textStyles } from "@/styles/text.style";
import { COLORS } from "@/constants/COLORS";

export default function NotFoundScreen() {
  const pathname = usePathname();
  const router = useRouter();
  const handleGoBack = () => router.replace("/");
  //
  return (
    <View style={sx.container}>
      <View style={sx.content}>
        <Text style={sx.message}>Not Found</Text>
        <Text style={sx.description}>
          It appears screen{" "}
          <Text style={sx.important}>{pathname}</Text> does not exist or has
          been moved temporarily.
        </Text>
        <Pressable onPress={handleGoBack} style={sx.button}>
          Go Back
        </Pressable>
      </View>
    </View>
  );
}

const sx = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  content: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 32,
    gap: 8,
  },
  message: {
    color: COLORS.black,
    ...textStyles.bodyLarge,
    fontWeight: "600",
  },
  description: {
    color: COLORS.black,
    opacity: 0.9,
    ...textStyles.bodyMedium,
  },
  important: {
    color: COLORS.primaryDark,
    ...textStyles.labelLarge,
  },
  button: {
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    marginTop: 24,
    height: 48,
    ...textStyles.bodyLarge,
    ...flexStyles.centerCenter,
  },
});
