import { Colors } from '@/constants/theme';
import { confirmDetailsStyles } from '@/styles/confirmDetailsStyles';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ConfirmDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [saved, setSaved] = useState(false);

  const job = params.job ? JSON.parse(params.job as string) : {
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    location: 'Remote',
    salary: '$70k-90k',
    type: 'Full-time',
    initial: 'T',
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.light.background }}
    >
      <View style={confirmDetailsStyles.container}>
        {/* Header */}
        <View style={confirmDetailsStyles.header}>
          <TouchableOpacity
            style={confirmDetailsStyles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={Colors.light.text}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={confirmDetailsStyles.saveButton}
            onPress={() => setSaved(!saved)}
          >
            <Ionicons
              name={saved ? 'star' : 'star-outline'}
              size={24}
              color={saved ? '#FFD700' : Colors.light.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView
          style={confirmDetailsStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Job Card */}
          <View style={confirmDetailsStyles.jobCard}>
            <View style={confirmDetailsStyles.jobHeader}>
              <View style={confirmDetailsStyles.jobLogo}>
                <Text style={confirmDetailsStyles.logoText}>
                  {job.initial}
                </Text>
              </View>
              <View style={confirmDetailsStyles.jobTitleSection}>
                <Text style={confirmDetailsStyles.jobTitle}>
                  {job.title}
                </Text>
                <Text style={confirmDetailsStyles.companyName}>
                  {job.company}
                </Text>
                <Text style={confirmDetailsStyles.jobType}>{job.type}</Text>
              </View>
            </View>

            <View style={confirmDetailsStyles.divider} />

            <View style={confirmDetailsStyles.detailRow}>
              <Text style={confirmDetailsStyles.detailLabel}>Location</Text>
              <Text style={confirmDetailsStyles.detailValue}>
                📍 {job.location}
              </Text>
            </View>
            <View style={confirmDetailsStyles.detailRow}>
              <Text style={confirmDetailsStyles.detailLabel}>Salary</Text>
              <Text style={confirmDetailsStyles.detailValue}>
                {job.salary}
              </Text>
            </View>
            <View style={confirmDetailsStyles.detailRow}>
              <Text style={confirmDetailsStyles.detailLabel}>
                Posted Date
              </Text>
              <Text style={confirmDetailsStyles.detailValue}>2 days ago</Text>
            </View>
          </View>

          {/* Description */}
          <View style={confirmDetailsStyles.section}>
            <Text style={confirmDetailsStyles.sectionTitle}>
              Job Description
            </Text>
            <Text style={confirmDetailsStyles.description}>
              We are looking for an experienced Frontend Developer to join our
              growing team. You'll work with modern technologies and have the
              opportunity to make a real impact on our products.
            </Text>
          </View>

          {/* Requirements */}
          <View style={confirmDetailsStyles.section}>
            <Text style={confirmDetailsStyles.sectionTitle}>
              Requirements
            </Text>
            <Text style={confirmDetailsStyles.requirements}>
              • 5+ years of experience with React
            </Text>
            <Text style={confirmDetailsStyles.requirements}>
              • Strong JavaScript/TypeScript skills
            </Text>
            <Text style={confirmDetailsStyles.requirements}>
              • Experience with REST APIs
            </Text>
            <Text style={confirmDetailsStyles.requirements}>
              • Experience with React Native is a plus
            </Text>
          </View>

          {/* Benefits */}
          <View style={confirmDetailsStyles.section}>
            <Text style={confirmDetailsStyles.sectionTitle}>Benefits</Text>
            <Text style={confirmDetailsStyles.benefits}>
              • Competitive salary & equity
            </Text>
            <Text style={confirmDetailsStyles.benefits}>
              • Remote work opportunity
            </Text>
            <Text style={confirmDetailsStyles.benefits}>
              • Professional development budget
            </Text>
            <Text style={confirmDetailsStyles.benefits}>
              • Health insurance included
            </Text>
          </View>
        </ScrollView>

        {/* Apply Button */}
        <View style={confirmDetailsStyles.buttonContainer}>
          <TouchableOpacity
            style={confirmDetailsStyles.applyButton}
            onPress={() =>
              router.push({
                pathname: '/applyFlow',
                params: { job: JSON.stringify(job) }
              })
            }
          >
            <Text style={confirmDetailsStyles.applyButtonText}>
              Continue to Apply
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}