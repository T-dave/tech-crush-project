import Button from "@/components/button";
import useHook from "@/hooks/general-hook";
import { router, useTheme } from "expo-router";
import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingItem from "@/components/onboard";
import Paginator from "@/components/paginator";
import { onboardingData } from "../../data/onboardData";
import { ThemedText } from "@/components/themed-text";

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any> | null>(null);
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const { isLoading, setIsLoading } = useHook();
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      finishOnboarding();
    }
  };
  const finishOnboarding = async () => {
    setIsLoading(true);
    try {
      setIsLoading(false);
      router.navigate("/auth");
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };
  
  

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.skip} onPress={finishOnboarding}>
        <ThemedText>Skip</ThemedText>
      </TouchableOpacity>

      <FlatList
        data={onboardingData}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={flatListRef}
      />
      <Paginator data={onboardingData} currentIndex={currentIndex} />
      <View style={{margin:20}}>
      <Button onPress={scrollToNext} isLoading={isLoading} title={currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}/>
      {
        currentIndex === onboardingData.length - 1 &&
        <Button onPress={()=>router.replace('/auth/log-in')} title="Sign in" type="secondary"/>
      }
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skip: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
  },
});