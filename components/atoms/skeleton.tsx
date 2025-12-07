import { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, DimensionValue } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  w?: DimensionValue;
  h?: DimensionValue;
  r?: number;
}

export const Skeleton: React.FC<Props> = ({ w = "100%", h = 16, r = 4 }) => {
  const [width, height, borderRadius] = [w, h, r];

  const shimmer = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmer, {
        toValue: 1,
        duration: 1300,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const translateX = shimmer.interpolate({
    inputRange: [0, 1],
    outputRange: [-150, 150],
  });

  return (
    <View style={[sx.container, { width, height, borderRadius }]}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: [{ translateX }],
        }}
      >
        <LinearGradient
          colors={["transparent", "rgba(255,255,255,0.4)", "transparent"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{ flex: 1 }}
        />
      </Animated.View>
    </View>
  );
};

const sx = StyleSheet.create({
  container: {
    backgroundColor: "#e3e3e3",
    overflow: "hidden",
  },
});
