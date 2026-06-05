import { Colors, Spacing } from '@/constants/theme';
import { savedJobsStyles } from '@/styles/savedJobsStyles';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface SavedJob {
  id: string;
  title: string;
  company: string;
  type: string;
  savedDays: number;
  initial: string;
  saved: boolean;
}

export default function SavedJobsScreen() {
  const [filter, setFilter] = useState('All');
  const [jobs, setJobs] = useState<SavedJob[]>([
    {
      id: '1',
      title: 'Product Design Intern',
      company: 'Mona',
      type: 'Internship',
      savedDays: 5,
      initial: 'M',
      saved: true,
    },
    {
      id: '2',
      title: 'Backend Developer Intern',
      company: 'InterTech',
      type: 'Internship',
      savedDays: 15,
      initial: 'I',
      saved: true,
    },
    {
      id: '3',
      title: 'UI/UX Engineer',
      company: 'Kuda Technologies',
      type: 'Internship',
      savedDays: 50,
      initial: 'K',
      saved: true,
    },
  ]);

  const filters = ['All', 'Applied', 'Reviewed', 'Interview', 'Rejected'];

  const toggleSave = (id: string) => {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, saved: !job.saved } : job
      )
    );
  };

  const filteredJobs = jobs.filter((job) => {
    if (filter === 'All') return true;
    return job.type === filter;
  });

  const renderJobCard = ({ item }: { item: SavedJob }) => (
    <View style={savedJobsStyles.jobCard}>
      {/* Logo */}
      <View style={savedJobsStyles.companyLogo}>
        <Text style={savedJobsStyles.logoText}>{item.initial}</Text>
      </View>

      {/* Job Info */}
      <View style={savedJobsStyles.jobInfo}>
        <Text style={savedJobsStyles.jobTitle}>{item.title}</Text>
        <Text style={savedJobsStyles.companyNameText}>{item.company}</Text>
        <View style={savedJobsStyles.jobMeta}>
          <Text style={savedJobsStyles.jobType}>{item.type}</Text>
          <Text style={savedJobsStyles.savedDate}>
            Saved {item.savedDays}d ago
          </Text>
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity
        style={savedJobsStyles.saveButton}
        onPress={() => toggleSave(item.id)}
      >
        <Ionicons
          name={item.saved ? 'star' : 'star-outline'}
          size={24}
          color={item.saved ? '#FFD700' : Colors.light.textSecondary}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View style={savedJobsStyles.container}>
        {/* Header */}
        <View style={savedJobsStyles.header}>
          <Text style={savedJobsStyles.title}>Saved Jobs</Text>
        </View>

        {/* Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={savedJobsStyles.filterContainer}
        >
          {filters.map((f) => (
            <TouchableOpacity
              key={f}
              style={[
                savedJobsStyles.filterButton,
                filter === f && savedJobsStyles.filterButtonActive,
              ]}
              onPress={() => setFilter(f)}
            >
              <Text
                style={[
                  savedJobsStyles.filterText,
                  filter === f && savedJobsStyles.filterTextActive,
                ]}
              >
                {f}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Jobs List */}
        {filteredJobs.length > 0 ? (
          <FlatList
            data={filteredJobs}
            renderItem={renderJobCard}
            keyExtractor={(item) => item.id}
            contentContainerStyle={savedJobsStyles.contentContainer}
            scrollEnabled={true}
          />
        ) : (
          <View style={savedJobsStyles.emptyContainer}>
            <Ionicons
              name="bookmark-outline"
              size={48}
              color={Colors.light.textSecondary}
              style={{ marginBottom: Spacing.two }}
            />
            <Text style={savedJobsStyles.emptyText}>No saved jobs yet</Text>
          </View>
        )}
      </View>

      {/* Bottom Navigation */}
      <View style={savedJobsStyles.bottomNav}>
        <TouchableOpacity style={savedJobsStyles.navItem}>
          <Ionicons
            name="home-outline"
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={savedJobsStyles.navItem}>
          <Ionicons
            name="search-outline"
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[savedJobsStyles.navItem, savedJobsStyles.navItemActive]}
        >
          <Ionicons name="bookmark" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={savedJobsStyles.navItem}>
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