import { Colors } from '@/constants/theme';
import { uploadResumeStyles } from '@/styles/uploadResumeStyles';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface Resume {
  name: string;
  size: string;
}

export default function UploadResumeScreen() {
  const router = useRouter();
  const [resume, setResume] = useState<Resume | null>(null);
  const [selectedOption, setSelectedOption] = useState('upload');

  const handleFileUpload = () => {
    setResume({
      name: 'My_Resume.pdf',
      size: '2.4 MB',
    });
  };

  const handleRemoveFile = () => {
    setResume(null);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.light.background }}
    >
      <View style={uploadResumeStyles.container}>
        {/* Header */}
        <View style={uploadResumeStyles.header}>
          <Text style={uploadResumeStyles.title}>Upload Resume</Text>
          <Text style={uploadResumeStyles.subtitle}>
            Provide your resume for this application
          </Text>
        </View>

        {/* Content */}
        <ScrollView
          style={uploadResumeStyles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Upload Options */}
          <View style={uploadResumeStyles.uploadSection}>
            <Text style={uploadResumeStyles.sectionLabel}>Resume Option</Text>

            <View style={uploadResumeStyles.radioGroup}>
              <TouchableOpacity
                style={uploadResumeStyles.radioOption}
                onPress={() => setSelectedOption('upload')}
              >
                <View
                  style={[
                    uploadResumeStyles.radio,
                    selectedOption === 'upload' &&
                      uploadResumeStyles.radioActive,
                  ]}
                >
                  {selectedOption === 'upload' && (
                    <View style={uploadResumeStyles.radioDot} />
                  )}
                </View>
                <Text style={uploadResumeStyles.radioLabel}>
                  Upload a resume
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={uploadResumeStyles.radioOption}
                onPress={() => setSelectedOption('profile')}
              >
                <View
                  style={[
                    uploadResumeStyles.radio,
                    selectedOption === 'profile' &&
                      uploadResumeStyles.radioActive,
                  ]}
                >
                  {selectedOption === 'profile' && (
                    <View style={uploadResumeStyles.radioDot} />
                  )}
                </View>
                <Text style={uploadResumeStyles.radioLabel}>
                  Use profile resume
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* File Upload */}
          {selectedOption === 'upload' && (
            <View style={uploadResumeStyles.uploadSection}>
              <Text style={uploadResumeStyles.sectionLabel}>
                Choose Resume File
              </Text>

              {!resume ? (
                <TouchableOpacity
                  style={uploadResumeStyles.uploadBox}
                  onPress={handleFileUpload}
                >
                  <Text style={uploadResumeStyles.uploadIcon}>📄</Text>
                  <Text style={uploadResumeStyles.uploadText}>
                    Click to upload
                  </Text>
                  <Text style={uploadResumeStyles.uploadSubtext}>
                    PDF or DOC (Max 5MB)
                  </Text>
                </TouchableOpacity>
              ) : (
                <View style={uploadResumeStyles.fileItem}>
                  <View style={uploadResumeStyles.fileInfo}>
                    <Text style={uploadResumeStyles.fileName}>
                      {resume.name}
                    </Text>
                    <Text style={uploadResumeStyles.fileSize}>
                      {resume.size}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={handleRemoveFile}>
                    <Text style={uploadResumeStyles.removeButton}>
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}

          {/* Cover Letter Info */}
          <View style={uploadResumeStyles.uploadSection}>
            <Text style={uploadResumeStyles.sectionLabel}>
              Additional Notes (Optional)
            </Text>
            <Text style={uploadResumeStyles.radioLabel}>
              You can add a cover letter or message to the employer
            </Text>
          </View>
        </ScrollView>

        {/* Buttons */}
        <View style={uploadResumeStyles.buttonContainer}>
          <TouchableOpacity
            style={[
              uploadResumeStyles.button,
              uploadResumeStyles.secondaryButton,
            ]}
            onPress={() => router.back()}
          >
            <Text style={uploadResumeStyles.secondaryButtonText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              uploadResumeStyles.button,
              uploadResumeStyles.primaryButton,
            ]}
            onPress={() =>
              router.push('/application')
            }
          >
            <Text style={uploadResumeStyles.primaryButtonText}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}