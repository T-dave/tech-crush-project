import { Colors } from '@/constants/theme';
import { searchStyles } from '@/styles/searchStyles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
}

export default function SearchScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      location: 'Remote',
    },
    {
      id: '2',
      title: 'React Native Developer',
      company: 'Mobile First',
      location: 'Lagos, NG',
    },
    {
      id: '3',
      title: 'Full Stack Developer',
      company: 'StartUp Inc',
      location: 'Remote',
    },
  ]);

  const filters = ['All', 'Remote', 'On-site', 'Hybrid'];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const renderJobCard = ({ item }: { item: Job }) => (
    <TouchableOpacity style={searchStyles.jobCard}>
      <View style={searchStyles.jobLogo}>
        <Text style={searchStyles.logoText}>{item.company[0]}</Text>
      </View>

      <View style={searchStyles.jobInfo}>
        <Text style={searchStyles.jobTitle}>{item.title}</Text>
        <Text style={searchStyles.companyName}>{item.company}</Text>
        <View style={searchStyles.jobMeta}>
          <Text style={searchStyles.location}>📍 {item.location}</Text>
        </View>
      </View>

      <TouchableOpacity style={searchStyles.saveButton}>
        <Ionicons
          name="star-outline"
          size={24}
          color={Colors.light.textSecondary}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View style={searchStyles.container}>
        {/* Header */}
        <View style={searchStyles.header}>
          <View style={searchStyles.searchBox}>
            <Ionicons
              name="search"
              size={18}
              color={Colors.light.textSecondary}
            />
            <TextInput
              style={searchStyles.searchInput}
              placeholder="Search jobs, companies..."
              placeholderTextColor={Colors.light.textSecondary}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons
                  name="close-circle"
                  size={18}
                  color={Colors.light.textSecondary}
                />
              </TouchableOpacity>
            )}
          </View>

          {/* Filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={searchStyles.filterContainer}
          >
            {filters.map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  searchStyles.filterChip,
                  selectedFilter === filter &&
                    searchStyles.filterChipActive,
                ]}
                onPress={() => setSelectedFilter(filter)}
              >
                <Text
                  style={[
                    searchStyles.filterText,
                    selectedFilter === filter &&
                      searchStyles.filterTextActive,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Results */}
        <View style={searchStyles.contentContainer}>
          <Text style={searchStyles.resultTitle}>
            {filteredJobs.length} results found
          </Text>

          {filteredJobs.length > 0 ? (
            <FlatList
              data={filteredJobs}
              renderItem={renderJobCard}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          ) : (
            <View style={searchStyles.emptyContainer}>
              <Ionicons
                name="search"
                size={48}
                color={Colors.light.textSecondary}
                style={{ marginBottom: 12 }}
              />
              <Text style={searchStyles.emptyText}>
                No jobs found. Try different keywords.
              </Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}