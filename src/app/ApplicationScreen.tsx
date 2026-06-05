import { Colors } from '@/constants/theme';
import { applicationStyles } from '@/styles/applicationStyles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ApplicationScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    coverLetter: '',
    agreeTerms: false,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    if (!formData.agreeTerms) {
      alert('Please agree to the terms');
      return;
    }

    // Submit application
    router.push('/home');
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.light.background }}
    >
      <View style={applicationStyles.container}>
        {/* Header */}
        <View style={applicationStyles.header}>
          <Text style={applicationStyles.title}>Complete Application</Text>
          <Text style={applicationStyles.subtitle}>
            Fill in your details to apply
          </Text>
        </View>

        {/* Content */}
        <ScrollView
          style={applicationStyles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Personal Information */}
          <View style={applicationStyles.section}>
            <Text style={applicationStyles.sectionTitle}>
              Personal Information
            </Text>

            <TextInput
              style={applicationStyles.input}
              placeholder="Full Name *"
              placeholderTextColor={Colors.light.textSecondary}
              value={formData.fullName}
              onChangeText={(value) =>
                handleInputChange('fullName', value)
              }
            />

            <TextInput
              style={applicationStyles.input}
              placeholder="Email Address *"
              placeholderTextColor={Colors.light.textSecondary}
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
            />

            <TextInput
              style={applicationStyles.input}
              placeholder="Phone Number *"
              placeholderTextColor={Colors.light.textSecondary}
              keyboardType="phone-pad"
              value={formData.phone}
              onChangeText={(value) => handleInputChange('phone', value)}
            />

            <TextInput
              style={applicationStyles.input}
              placeholder="Portfolio URL (Optional)"
              placeholderTextColor={Colors.light.textSecondary}
              value={formData.portfolio}
              onChangeText={(value) =>
                handleInputChange('portfolio', value)
              }
            />
          </View>

          {/* Cover Letter */}
          <View style={applicationStyles.section}>
            <Text style={applicationStyles.sectionTitle}>Cover Letter</Text>

            <TextInput
              style={applicationStyles.textArea}
              placeholder="Tell us why you're a great fit for this role..."
              placeholderTextColor={Colors.light.textSecondary}
              multiline={true}
              value={formData.coverLetter}
              onChangeText={(value) =>
                handleInputChange('coverLetter', value)
              }
            />
          </View>

          {/* Terms & Conditions */}
          <View style={applicationStyles.section}>
            <TouchableOpacity
              style={applicationStyles.checkbox}
              onPress={() =>
                setFormData({
                  ...formData,
                  agreeTerms: !formData.agreeTerms,
                })
              }
            >
              <View
                style={[
                  applicationStyles.checkboxBox,
                  formData.agreeTerms &&
                    applicationStyles.checkboxBoxActive,
                ]}
              >
                {formData.agreeTerms && (
                  <Ionicons
                    name="checkmark"
                    size={12}
                    color={Colors.secondary}
                  />
                )}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={applicationStyles.checkboxLabel}>
                  I agree to the terms and conditions
                </Text>
              </View>
            </TouchableOpacity>

            <Text style={applicationStyles.agreeText}>
              By applying, you agree that your information will be shared with
              the employer and that you are interested in this opportunity.
            </Text>
          </View>
        </ScrollView>

        {/* Buttons */}
        <View style={applicationStyles.buttonContainer}>
          <TouchableOpacity
            style={[
              applicationStyles.button,
              applicationStyles.cancelButton,
            ]}
            onPress={() => router.back()}
          >
            <Text style={applicationStyles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              applicationStyles.button,
              applicationStyles.submitButton,
            ]}
            onPress={handleSubmit}
          >
            <Text style={applicationStyles.submitButtonText}>
              Submit Application
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}