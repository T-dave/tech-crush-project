import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2563eb", // Active blue color from your Figma design
        tabBarInactiveTintColor: "#64748b",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e2e8f0",
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather size={22} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="listing"
        options={{
          title: "Listing",
          tabBarIcon: ({ color }) => (
            <Feather size={22} name="file-text" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="applications"
        options={{
          title: "Applications",
          tabBarIcon: ({ color }) => (
            <Feather size={22} name="briefcase" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="pipeline"
        options={{
          title: "Pipeline",
          tabBarIcon: ({ color }) => (
            <Feather size={22} name="share-2" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
