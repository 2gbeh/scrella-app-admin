import { Tabs } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
//
import { COLORS } from "@/constants/COLORS";
import { SIZES } from "@/constants/SIZES";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
        // tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={SIZES.icon} name="house" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="customers"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={SIZES.icon} name="user-group" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
