import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2563eb", // Active blue color from your Figma design
        tabBarInactiveTintColor: "#64748b",
        headerShown: false,
        
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

      {/* <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Feather size={22} name="search" color={color} />
          ),
        }}
      /> */}

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
