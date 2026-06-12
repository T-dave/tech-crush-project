import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PipelineScreen() {
  const [activeTab, setActiveTab] = useState("Applied");

  // Candidate Data from your Figma design
  const applicants = [
    {
      id: "1",
      name: "Tunde A.",
      role: "UI/UX Designer",
      skill: "Figma",
      location: "Lagos",
    },
    {
      id: "2",
      name: "George K.",
      role: "Frontend Dev",
      skill: "React",
      location: "Lagos",
    },
    {
      id: "3",
      name: "Sola B.",
      role: "Full-Stack Dev",
      skill: "Node.js",
      location: "Lagos",
    },
    {
      id: "4",
      name: "Promise J.",
      role: "Product Manager",
      skill: "Excel",
      location: "Lagos",
    },
    {
      id: "5",
      name: "Aina S.",
      role: "Backend Dev",
      skill: "Python",
      location: "Lagos",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-slate-100">
        <TouchableOpacity className="p-1">
          <Ionicons name="chevron-back" size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-slate-800">Pipeline</Text>
        <View className="flex-row items-center space-x-3">
          <TouchableOpacity className="p-1">
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={22}
              color="#1E293B"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-1">
            <Ionicons name="notifications-outline" size={22} color="#1E293B" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        className="p-4 flex-1"
      >
        <View className="flex-row items-center bg-white p-4 rounded-xl border border-slate-200 mb-5">
          <View className="w-12 h-12 rounded-lg bg-teal-50 items-center justify-center mr-3">
            <MaterialIcons name="work-outline" size={24} color="#0F766E" />
          </View>
          <View className="flex-1">
            <Text className="text-base font-bold text-slate-800">
              UI/UX Design Intern
            </Text>
            <Text className="text-xs text-slate-500 mt-0.5">
              24 applicants • Closes Jun 30
            </Text>
          </View>
        </View>

        <View className="flex-row bg-slate-100 p-1 rounded-full mb-5">
          <TouchableOpacity
            className={`flex-1 flex-row items-center justify-center py-2.5 rounded-full space-x-2 ${activeTab === "Applied" ? "bg-blue-600" : ""}`}
            onPress={() => setActiveTab("Applied")}
          >
            <Text
              className={`font-semibold text-sm ${activeTab === "Applied" ? "text-white" : "text-slate-500"}`}
            >
              Applied
            </Text>
            <View
              className={`px-2 py-0.5 rounded-full ${activeTab === "Applied" ? "bg-white" : "bg-slate-300"}`}
            >
              <Text
                className={`text-xs font-bold ${activeTab === "Applied" ? "text-blue-600" : "text-slate-600"}`}
              >
                10
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 flex-row items-center justify-center py-2.5 rounded-full space-x-2 ${activeTab === "Reviewed" ? "bg-blue-600" : ""}`}
            onPress={() => setActiveTab("Reviewed")}
          >
            <Text
              className={`font-semibold text-sm ${activeTab === "Reviewed" ? "text-white" : "text-slate-500"}`}
            >
              Reviewed
            </Text>
            <View
              className={`px-2 py-0.5 rounded-full ${activeTab === "Reviewed" ? "bg-white" : "bg-slate-300"}`}
            >
              <Text
                className={`text-xs font-bold ${activeTab === "Reviewed" ? "text-blue-600" : "text-slate-600"}`}
              >
                10
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-row flex-wrap justify-between">
          {applicants.map((candidate) => (
            <View
              key={candidate.id}
              className="w-[48%] bg-white border border-slate-200 rounded-xl p-4 items-center mb-4"
            >
              {/* Profile Image Placeholder */}
              <View className="w-12 h-12 rounded-full bg-slate-200 items-center justify-center mb-2">
                <Ionicons name="person" size={22} color="#64748B" />
              </View>

              <Text className="text-sm font-bold text-slate-800">
                {candidate.name}
              </Text>
              <Text className="text-xs text-slate-500 text-center mt-0.5">
                {candidate.role}
              </Text>

              {/* Tags Row */}
              <View className="flex-row space-x-1.5 mt-3">
                <View className="bg-purple-50 px-2 py-1 rounded-full">
                  <Text className="text-[10px] font-semibold text-purple-700">
                    {candidate.skill}
                  </Text>
                </View>
                <View className="bg-blue-50 px-2 py-1 rounded-full">
                  <Text className="text-[10px] font-semibold text-blue-700">
                    {candidate.location}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity className="flex-row items-center justify-center border-dashed border-2 border-blue-500 rounded-lg py-3 mt-4 space-x-2">
          <Ionicons name="add-circle-outline" size={20} color="#2563EB" />
          <Text className="text-blue-600 font-bold text-sm">Add manually</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
