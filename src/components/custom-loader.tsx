import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

interface SpinnerLoaderProps {
  size?: number;
  dotSize?: number;
  color?: string;
  duration?: number;
}

export default function SpinnerLoader({
  size = 80,
  dotSize = 12,
  color = "#FFFFFF",
  duration = 1200,
}: SpinnerLoaderProps) {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const dots = Array.from({ length: 10 });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          width: size,
          height: size,
        },
        animatedStyle,
      ]}
    >
      {dots.map((_, index) => {
        const angle = (index * 360) / 10;
        const radius = size / 2 - dotSize;

        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <View
            key={index}
            style={{
              position: "absolute",
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
              backgroundColor: color,
              opacity: (index + 1) / 10,

              left: size / 2 + x - dotSize / 2,
              top: size / 2 + y - dotSize / 2,
            }}
          />
        );
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});