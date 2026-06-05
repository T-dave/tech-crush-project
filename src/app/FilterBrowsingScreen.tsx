import { Colors } from '@/constants/theme';
import { filterBrowsingStyles } from '@/styles/filterBrowsingStyles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface FilterState {
  locations: string[];
  jobTypes: string[];
  salaryRange: string;
  experience: string[];
}

export default function FilterBrowsingScreen() {
  const router = useRouter();
  const [filters, setFilters] = useState<FilterState>({
    locations: [],
    jobTypes: [],
    salaryRange: 'All',
    experience: [],
  });

  const locations = ['Remote', 'Lagos', 'Abuja', 'Port Harcourt', 'Ibadan'];
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
  const salaryRanges = ['All', '$0-30k', '$30k-50k', '$50k-75k', '$75k+'];
  const experiences = ['Entry-level', 'Mid-level', 'Senior', 'Executive'];

  const toggleLocation = (location: string) => {
    setFilters((prev) => ({
      ...prev,
      locations: prev.locations.includes(location)
        ? prev.locations.filter((l) => l !== location)
        : [...prev.locations, location],
    }));
  };

  const toggleJobType = (type: string) => {
    setFilters((prev) => ({
      ...prev,
      jobTypes: prev.jobTypes.includes(type)
        ? prev.jobTypes.filter((t) => t !== type)
        : [...prev.jobTypes, type],
    }));
  };

  const toggleExperience = (exp: string) => {
    setFilters((prev) => ({
      ...prev,
      experience: prev.experience.includes(exp)
        ? prev.experience.filter((e) => e !== exp)
        : [...prev.experience, exp],
    }));
  };

  const resetFilters = () => {
    setFilters({
      locations: [],
      jobTypes: [],
      salaryRange: 'All',
      experience: [],
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.light.background }}
    >
      <View style={filterBrowsingStyles.container}>
        {/* Header */}
        <View style={filterBrowsingStyles.header}>
          <Text style={filterBrowsingStyles.title}>Filter Jobs</Text>
          <TouchableOpacity
            style={filterBrowsingStyles.closeButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="close"
              size={24}
              color={Colors.light.text}
            />
          </TouchableOpacity>
        </View>

        {/* Filters */}
        <ScrollView style={filterBrowsingStyles.contentContainer}>
          {/* Location */}
          <View style={filterBrowsingStyles.filterSection}>
            <Text style={filterBrowsingStyles.filterTitle}>Location</Text>
            {locations.map((location) => (
              <TouchableOpacity
                key={location}
                style={filterBrowsingStyles.filterOption}
                onPress={() => toggleLocation(location)}
              >
                <View
                  style={[
                    filterBrowsingStyles.checkbox,
                    filters.locations.includes(location) &&
                      filterBrowsingStyles.checkboxActive,
                  ]}
                >
                  {filters.locations.includes(location) && (
                    <Ionicons
                      name="checkmark"
                      size={14}
                      color={Colors.secondary}
                    />
                  )}
                </View>
                <Text style={filterBrowsingStyles.optionLabel}>
                  {location}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Job Type */}
          <View style={filterBrowsingStyles.filterSection}>
            <Text style={filterBrowsingStyles.filterTitle}>Job Type</Text>
            {jobTypes.map((type) => (
              <TouchableOpacity
                key={type}
                style={filterBrowsingStyles.filterOption}
                onPress={() => toggleJobType(type)}
              >
                <View
                  style={[
                    filterBrowsingStyles.checkbox,
                    filters.jobTypes.includes(type) &&
                      filterBrowsingStyles.checkboxActive,
                  ]}
                >
                  {filters.jobTypes.includes(type) && (
                    <Ionicons
                      name="checkmark"
                      size={14}
                      color={Colors.secondary}
                    />
                  )}
                </View>
                <Text style={filterBrowsingStyles.optionLabel}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Salary Range */}
          <View style={filterBrowsingStyles.filterSection}>
            <Text style={filterBrowsingStyles.filterTitle}>Salary Range</Text>
            {salaryRanges.map((range) => (
              <TouchableOpacity
                key={range}
                style={filterBrowsingStyles.filterOption}
                onPress={() =>
                  setFilters((prev) => ({ ...prev, salaryRange: range }))
                }
              >
                <View
                  style={[
                    filterBrowsingStyles.checkbox,
                    filters.salaryRange === range &&
                      filterBrowsingStyles.checkboxActive,
                  ]}
                >
                  {filters.salaryRange === range && (
                    <Ionicons
                      name="checkmark"
                      size={14}
                      color={Colors.secondary}
                    />
                  )}
                </View>
                <Text style={filterBrowsingStyles.optionLabel}>{range}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Experience Level */}
          <View style={filterBrowsingStyles.filterSection}>
            <Text style={filterBrowsingStyles.filterTitle}>
              Experience Level
            </Text>
            {experiences.map((exp) => (
              <TouchableOpacity
                key={exp}
                style={filterBrowsingStyles.filterOption}
                onPress={() => toggleExperience(exp)}
              >
                <View
                  style={[
                    filterBrowsingStyles.checkbox,
                    filters.experience.includes(exp) &&
                      filterBrowsingStyles.checkboxActive,
                  ]}
                >
                  {filters.experience.includes(exp) && (
                    <Ionicons
                      name="checkmark"
                      size={14}
                      color={Colors.secondary}
                    />
                  )}
                </View>
                <Text style={filterBrowsingStyles.optionLabel}>{exp}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Buttons */}
        <View style={filterBrowsingStyles.buttonContainer}>
          <TouchableOpacity
            style={[
              filterBrowsingStyles.button,
              filterBrowsingStyles.resetButton,
            ]}
            onPress={resetFilters}
          >
            <Text style={filterBrowsingStyles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              filterBrowsingStyles.button,
              filterBrowsingStyles.applyButton,
            ]}
            onPress={() => router.back()}
          >
            <Text style={filterBrowsingStyles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}