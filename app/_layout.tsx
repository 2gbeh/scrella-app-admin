import "react-native-reanimated";
import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";
//
import { COLORS } from "@/constants/COLORS";
import { FontMappings } from "@/constants/FONTS";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "(main)",
};

export default function RootLayout() {
  const [loaded] = useFonts(FontMappings);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: COLORS.background },
          }}
        >
          <Stack.Screen name="(main)" />
          <Stack.Screen name="settings" options={{ presentation: "modal" }} />
        </Stack>
        <StatusBar backgroundColor={COLORS.background} style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
