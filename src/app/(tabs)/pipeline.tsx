import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
// Math calculating equal width for side-by-side grid cards minus padding boundaries
const CARD_WIDTH = (width - 46) / 2;

export default function PipelineScreen() {
  const [activeTab, setActiveTab] = useState("Applied");

  // Applicant dataset explicitly matching your Figma screen view metrics
  const applicants = [
    {
      id: "1",
      name: "Tunde A.",
      role: "UI/UX Designer",
      skill: "Figma",
      location: "Lagos",
      status: "Applied",
    },
    {
      id: "2",
      name: "George K.",
      role: "Frontend Dev",
      skill: "React",
      location: "Lagos",
      status: "Applied",
    },
    {
      id: "3",
      name: "Sola B.",
      role: "Full-Stack Dev",
      skill: "Node.js",
      location: "Lagos",
      status: "Applied",
    },
    {
      id: "4",
      name: "Promise J.",
      role: "Product Manager",
      skill: "Excel",
      location: "Lagos",
      status: "Applied",
    },
    {
      id: "5",
      name: "Aina S.",
      role: "Backend Dev",
      skill: "Python",
      location: "Lagos",
      status: "Applied",
    },
  ];

  const filteredApplicants = applicants.filter(
    (applicant) => applicant.status === activeTab,
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navigation Row */}
      <View style={styles.topHeader}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#1e293b" />
        </TouchableOpacity>
        <Text style={styles.topHeaderTitle}>Pipeline</Text>
        <View style={styles.topHeaderIcons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Feather name="message-square" size={20} color="#1e293b" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Feather name="bell" size={20} color="#1e293b" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Active Open Role Meta Card Header */}
        <View style={styles.jobOverviewCard}>
          <View style={styles.jobAvatarPlaceholder}>
            <Ionicons name="briefcase-outline" size={20} color="#2563eb" />
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.jobTitle}>UI/UX Design Intern</Text>
            <Text style={styles.jobMeta}>24 applicants · Closes Jun 30</Text>
          </View>
        </View>

        {/* Dynamic State Badge Filter Controls */}
        <View style={styles.toggleRow}>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              activeTab === "Applied" && styles.toggleBtnActive,
            ]}
            onPress={() => setActiveTab("Applied")}
          >
            <Text
              style={[
                styles.toggleText,
                activeTab === "Applied" && styles.toggleTextActive,
              ]}
            >
              Applied
            </Text>
            <View
              style={[
                styles.badge,
                activeTab === "Applied"
                  ? styles.badgeActive
                  : styles.badgeInactive,
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  activeTab === "Applied" && styles.badgeTextActive,
                ]}
              >
                10
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleBtn,
              activeTab === "Reviewed" && styles.toggleBtnActive,
            ]}
            onPress={() => setActiveTab("Reviewed")}
          >
            <Text
              style={[
                styles.toggleText,
                activeTab === "Reviewed" && styles.toggleTextActive,
              ]}
            >
              Reviewed
            </Text>
            <View
              style={[
                styles.badge,
                activeTab === "Reviewed"
                  ? styles.badgeActive
                  : styles.badgeInactive,
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  activeTab === "Reviewed" && styles.badgeTextActive,
                ]}
              >
                10
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Side-by-Side Flex Wrapping Candidate Cards */}
        <View style={styles.gridContainer}>
          {filteredApplicants.map((applicant) => (
            <View key={applicant.id} style={styles.candidateCard}>
              <View style={styles.cardHeader}>
                <View style={styles.candidateAvatar}>
                  <Text style={styles.avatarInitial}>{applicant.name[0]}</Text>
                </View>
                <View style={styles.candidateMeta}>
                  <Text style={styles.candidateName} numberOfLines={1}>
                    {applicant.name}
                  </Text>
                  <Text style={styles.candidateRole} numberOfLines={1}>
                    {applicant.role}
                  </Text>
                </View>
              </View>

              {/* Skill + City Parameter Pill Badges */}
              <View style={styles.tagWrapper}>
                <View style={[styles.tag, { backgroundColor: "#fae8ff" }]}>
                  <Text style={[styles.tagTextLabel, { color: "#d946ef" }]}>
                    {applicant.skill}
                  </Text>
                </View>
                <View style={[styles.tag, { backgroundColor: "#e0f2fe" }]}>
                  <Text style={[styles.tagTextLabel, { color: "#0284c7" }]}>
                    {applicant.location}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Action Call to Insert Profiles manually */}
        <TouchableOpacity style={styles.addManuallyButton}>
          <Ionicons name="add-circle" size={18} color="#2563eb" />
          <Text style={styles.addManuallyText}>Add manually</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#f1f5f9",
  },
  backButton: {
    padding: 4,
  },
  topHeaderTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },
  topHeaderIcons: {
    flexDirection: "row",
    gap: 14,
  },
  iconBtn: {
    padding: 4,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  jobOverviewCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 12,
    padding: 16,
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },
  jobAvatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
  },
  jobDetails: {
    marginLeft: 12,
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f172a",
  },
  jobMeta: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },
  toggleRow: {
    flexDirection: "row",
    backgroundColor: "#f1f5f9",
    borderRadius: 24,
    padding: 4,
    marginBottom: 20,
  },
  toggleBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  toggleBtnActive: {
    backgroundColor: "#2563eb",
  },
  toggleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#64748b",
  },
  toggleTextActive: {
    color: "#ffffff",
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  badgeActive: {
    backgroundColor: "#ffffff",
  },
  badgeInactive: {
    backgroundColor: "#cbd5e1",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
  },
  badgeTextActive: {
    color: "#2563eb",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 14,
  },
  candidateCard: {
    width: CARD_WIDTH,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#ffffff",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  candidateAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarInitial: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
  },
  candidateMeta: {
    marginLeft: 8,
    flex: 1,
  },
  candidateName: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0f172a",
  },
  candidateRole: {
    fontSize: 11,
    color: "#64748b",
    marginTop: 1,
  },
  tagWrapper: {
    flexDirection: "row",
    gap: 6,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  tagTextLabel: {
    fontSize: 10,
    fontWeight: "600",
  },
  addManuallyButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#93c5fd",
    borderStyle: "dashed",
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 24,
    backgroundColor: "#f8fafc",
    gap: 6,
  },
  addManuallyText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563eb",
  },
});
