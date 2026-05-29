import React, { useEffect } from "react";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { splashStyles } from "../styles/splashStyles";
import SpinnerLoader from "@/components/custom-loader";
import { router } from "expo-router";

const SplashScreen: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboard');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={splashStyles.container}>
      <Image
        source={require("../../assets/images/ion_rocket-sharp.png")}
        style={splashStyles.logoImage}
        resizeMode="contain"
      />
      <Text style={splashStyles.title}>LaunchPad</Text>
      <Text style={splashStyles.subtitle}>
        Your first step{"\n"}into tech. Verified.
      </Text>
      <SpinnerLoader
        size={45}
        dotSize={6}
        color="#FFFFFF"
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
