import { Colors } from '@/constants/theme';
import { applyFlowStyles } from '@/styles/applyFlowStyles';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface UploadedFile {
  name: string;
  size: string;
}

export default function ApplyFlowScreen() {
  const params = useLocalSearchParams();
  const [cvFile, setCvFile] = useState<UploadedFile | null>(null);
  const [portfolio, setPortfolio] = useState('');
  const [introduction, setIntroduction] = useState('');

  // Parse job data from params
  const job = params.job ? JSON.parse(params.job as string) : {
    title: 'Frontend Developer Intern',
    company: 'Paystack',
  };

  const handleFileUpload = () => {
    setCvFile({
      name: 'Resume.pdf',
      size: '2.4 MB',
    });
  };

  const handleRemoveFile = () => {
    setCvFile(null);
  };

  const handleContinue = () => {
    if (!cvFile) {
      Alert.alert('Required', 'Please upload your CV');
      return;
    }

    if (!introduction.trim()) {
      Alert.alert('Required', 'Please add an introduction');
      return;
    }

    // Pass data to reviewSubmit
    router.push({
      pathname: '/reviewSubmit',
      params: {
        job: params.job,
        cvFile: JSON.stringify(cvFile),
        portfolio,
        introduction,
      },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View style={applyFlowStyles.container}>
        {/* Header */}
        <View style={applyFlowStyles.header}>
          <Text style={applyFlowStyles.title}>
            Apply to {job.title}
          </Text>
          <Text style={applyFlowStyles.subtitle}>{job.company}</Text>
        </View>

        {/* Content */}
        <ScrollView
          style={applyFlowStyles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* CV Upload Section */}
          <View style={applyFlowStyles.section}>
            <Text style={applyFlowStyles.sectionLabel}>Upload CV</Text>

            {!cvFile ? (
              <TouchableOpacity
                style={applyFlowStyles.fileUploadBox}
                onPress={handleFileUpload}
              >
                <Text style={applyFlowStyles.uploadIcon}>📄</Text>
                <Text style={applyFlowStyles.uploadText}>Click to upload</Text>
                <Text style={applyFlowStyles.uploadSubtext}>
                  or drag and drop
                </Text>
              </TouchableOpacity>
            ) : (
              <View style={applyFlowStyles.fileItem}>
                <View style={applyFlowStyles.fileInfo}>
                  <Text style={applyFlowStyles.fileName}>{cvFile.name}</Text>
                  <Text style={applyFlowStyles.fileSize}>{cvFile.size}</Text>
                </View>
                <TouchableOpacity onPress={handleRemoveFile}>
                  <Text style={applyFlowStyles.removeButton}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Portfolio Section */}
          <View style={applyFlowStyles.section}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={applyFlowStyles.sectionLabel}>Portfolio</Text>
              <Text style={applyFlowStyles.optionalLabel}>Optional</Text>
            </View>
            <TextInput
              style={applyFlowStyles.input}
              placeholder="https://yourportfolio.com"
              placeholderTextColor={Colors.light.textSecondary}
              value={portfolio}
              onChangeText={setPortfolio}
            />
          </View>

          {/* Introduction Section */}
          <View style={applyFlowStyles.section}>
            <Text style={applyFlowStyles.sectionLabel}>
              Add a short introduction
            </Text>
            <TextInput
              style={applyFlowStyles.textArea}
              placeholder="Tell us why you're interested in this role..."
              placeholderTextColor={Colors.light.textSecondary}
              multiline={true}
              value={introduction}
              onChangeText={setIntroduction}
            />
          </View>
        </ScrollView>

        {/* Button */}
        <View style={applyFlowStyles.buttonContainer}>
          <TouchableOpacity
            style={applyFlowStyles.button}
            onPress={handleContinue}
          >
            <Text style={applyFlowStyles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={applyFlowStyles.bottomNav}>
        <TouchableOpacity style={applyFlowStyles.navItem}>
          <Ionicons
            name="home-outline"
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={applyFlowStyles.navItem}>
          <Ionicons
            name="search-outline"
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={applyFlowStyles.navItem}>
          <Ionicons name="bookmark" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={applyFlowStyles.navItem}>
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