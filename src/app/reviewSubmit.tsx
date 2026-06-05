import { Colors, Spacing } from '@/constants/theme';
import { reviewSubmitStyles } from '@/styles/reviewSubmitStyles';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface ReviewData {
  jobTitle: string;
  company: string;
  cv: string;
  cvSize: string;
  portfolio: string;
  introduction: string;
}

export default function ReviewSubmitScreen() {
  const params = useLocalSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Parse job and form data from params
  const job = params.job ? JSON.parse(params.job as string) : {};
  const cvFile = params.cvFile ? JSON.parse(params.cvFile as string) : null;
  const portfolio = params.portfolio as string || '';
  const introduction = params.introduction as string || '';

  const reviewData: ReviewData = {
    jobTitle: job.title || 'Frontend Developer Intern',
    company: job.company || 'Paystack',
    cv: cvFile?.name || 'Resume.pdf',
    cvSize: cvFile?.size || '2.4 MB',
    portfolio: portfolio || 'https://yourportfolio.com',
    introduction: introduction || 'I am a passionate developer...',
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleBackHome = () => {
    router.replace('/');
  };

  if (isSuccess) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
        <View style={reviewSubmitStyles.container}>
          {/* Header */}
          <View style={reviewSubmitStyles.header}>
            <Text style={reviewSubmitStyles.title}>
              Application Submitted!
            </Text>
          </View>

          {/* Content */}
          <ScrollView
            style={{ flex: 1, paddingHorizontal: Spacing.three, paddingTop: Spacing.three }}
            showsVerticalScrollIndicator={false}
          >
            {/* Success Icon */}
            <View style={reviewSubmitStyles.successIcon}>
              <Ionicons name="checkmark" size={32} color={Colors.secondary} />
            </View>

            {/* Success Message */}
            <Text style={reviewSubmitStyles.successText}>
              Application Submitted!
            </Text>
            <Text style={reviewSubmitStyles.successSubtext}>
              Your application has been sent successfully.
            </Text>

            {/* Info Card */}
            <View style={reviewSubmitStyles.reviewCard}>
              <View style={reviewSubmitStyles.jobHeader}>
                <Text style={reviewSubmitStyles.jobTitle}>
                  {reviewData.jobTitle}
                </Text>
                <Text style={reviewSubmitStyles.companyName}>
                  {reviewData.company}
                </Text>
              </View>

              <View style={reviewSubmitStyles.divider} />

              <View style={reviewSubmitStyles.fieldGroup}>
                <Text style={reviewSubmitStyles.fieldLabel}>Applied Date</Text>
                <Text style={reviewSubmitStyles.fieldValue}>Today</Text>
              </View>

              <View style={reviewSubmitStyles.fieldGroup}>
                <Text style={reviewSubmitStyles.fieldLabel}>
                  Expected Response
                </Text>
                <Text style={reviewSubmitStyles.fieldValue}>
                  Within 7-14 days
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* Buttons */}
          <View style={reviewSubmitStyles.buttonContainer}>
            <TouchableOpacity
              style={reviewSubmitStyles.submitButton}
              onPress={handleBackHome}
            >
              <Text style={reviewSubmitStyles.submitButtonText}>
                Back to Home
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Navigation */}
        <View style={reviewSubmitStyles.bottomNav}>
          <TouchableOpacity style={reviewSubmitStyles.navItem}>
            <Ionicons
              name="home-outline"
              size={24}
              color={Colors.light.textSecondary}
            />
          </TouchableOpacity>
          <TouchableOpacity style={reviewSubmitStyles.navItem}>
            <Ionicons
              name="search-outline"
              size={24}
              color={Colors.light.textSecondary}
            />
          </TouchableOpacity>
          <TouchableOpacity style={reviewSubmitStyles.navItem}>
            <Ionicons name="bookmark" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={reviewSubmitStyles.navItem}>
            <Ionicons
              name="person-outline"
              size={24}
              color={Colors.light.textSecondary}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View style={reviewSubmitStyles.container}>
        {/* Header */}
        <View style={reviewSubmitStyles.header}>
          <Text style={reviewSubmitStyles.title}>Review & Submit</Text>
        </View>

        {/* Content */}
        <ScrollView
          style={reviewSubmitStyles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Review Card */}
          <View style={reviewSubmitStyles.reviewCard}>
            {/* Job Info */}
            <View style={reviewSubmitStyles.jobHeader}>
              <Text style={reviewSubmitStyles.jobTitle}>
                {reviewData.jobTitle}
              </Text>
              <Text style={reviewSubmitStyles.companyName}>
                {reviewData.company}
              </Text>
            </View>

            <View style={reviewSubmitStyles.divider} />

            {/* CV */}
            <View style={reviewSubmitStyles.fieldGroup}>
              <Text style={reviewSubmitStyles.fieldLabel}>CV</Text>
              <View style={reviewSubmitStyles.fileDisplay}>
                <Text style={reviewSubmitStyles.fileName}>
                  {reviewData.cv}
                </Text>
              </View>
            </View>

            {/* Portfolio */}
            {reviewData.portfolio && (
              <View style={reviewSubmitStyles.fieldGroup}>
                <Text style={reviewSubmitStyles.fieldLabel}>Portfolio</Text>
                <View style={reviewSubmitStyles.fileDisplay}>
                  <Text style={reviewSubmitStyles.fileName}>
                    {reviewData.portfolio}
                  </Text>
                </View>
              </View>
            )}

            {/* Introduction */}
            <View style={reviewSubmitStyles.fieldGroup}>
              <Text style={reviewSubmitStyles.fieldLabel}>Introduction</Text>
              <View style={reviewSubmitStyles.fileDisplay}>
                <Text style={reviewSubmitStyles.fileName}>
                  {reviewData.introduction.substring(0, 50)}...
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Buttons */}
        <View style={reviewSubmitStyles.buttonContainer}>
          <TouchableOpacity
            style={reviewSubmitStyles.submitButton}
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color={Colors.secondary} />
            ) : (
              <Text style={reviewSubmitStyles.submitButtonText}>
                Submit Application
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={reviewSubmitStyles.backButton}
            onPress={() => router.back()}
            disabled={isSubmitting}
          >
            <Text style={reviewSubmitStyles.backButtonText}>
              Back to Job
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={reviewSubmitStyles.bottomNav}>
        <TouchableOpacity style={reviewSubmitStyles.navItem}>
          <Ionicons
            name="home-outline"
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={reviewSubmitStyles.navItem}>
          <Ionicons
            name="search-outline"
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={reviewSubmitStyles.navItem}>
          <Ionicons name="bookmark" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={reviewSubmitStyles.navItem}>
          <Ionicons
            name="person-outline"
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}