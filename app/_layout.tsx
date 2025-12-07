import "react-native-reanimated";
// import { useEffect } from 'react';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";
// 
import { COLORS } from "@/constants/COLORS";
// import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "(main)",
};

export default function RootLayout() {
  // const [fontsLoaded] = useFonts({ Poppins_400Regular });

  // useEffect(() => {
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

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
