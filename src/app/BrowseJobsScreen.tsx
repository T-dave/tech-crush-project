import { Colors } from '@/constants/theme';
import { browseJobsStyles } from '@/styles/browseJobsStyles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  initial: string;
}

export default function BrowseJobsScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'Remote',
      salary: '$50k-70k',
      initial: 'T',
    },
    {
      id: '2',
      title: 'Backend Engineer',
      company: 'Cloud Systems',
      location: 'Lagos',
      salary: '$60k-85k',
      initial: 'C',
    },
    {
      id: '3',
      title: 'Product Manager',
      company: 'StartUp Inc',
      location: 'Remote',
      salary: '$70k-90k',
      initial: 'S',
    },
    {
      id: '4',
      title: 'UI/UX Designer',
      company: 'Design Lab',
      location: 'Abuja',
      salary: '$45k-60k',
      initial: 'D',
    },
    {
      id: '5',
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Remote',
      salary: '$75k-100k',
      initial: 'A',
    },
  ]);

  const categories = ['All', 'Tech', 'Design', 'Business', 'Marketing'];

  const renderJobCard = ({ item }: { item: Job }) => (
    <View style={browseJobsStyles.jobCard}>
      <View style={browseJobsStyles.jobLogo}>
        <Text style={browseJobsStyles.logoText}>{item.initial}</Text>
      </View>

      <View style={browseJobsStyles.jobInfo}>
        <Text style={browseJobsStyles.jobTitle}>{item.title}</Text>
        <Text style={browseJobsStyles.companyName}>{item.company}</Text>
        <View style={browseJobsStyles.jobMeta}>
          <Text style={browseJobsStyles.location}>📍 {item.location}</Text>
          <Text style={browseJobsStyles.salary}>{item.salary}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={browseJobsStyles.applyButton}
        onPress={() =>
          router.push({
            pathname: '/confirmDetails',
            params: { job: JSON.stringify(item) }
          })
        }
      >
        <Text style={browseJobsStyles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.light.background }}
    >
      <View style={browseJobsStyles.container}>
        {/* Header */}
        <View style={browseJobsStyles.header}>
          <Text style={browseJobsStyles.title}>Browse All Jobs</Text>
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={browseJobsStyles.filterContainer}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                browseJobsStyles.filterButton,
                selectedCategory === cat &&
                  browseJobsStyles.filterButtonActive,
              ]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[
                  browseJobsStyles.filterText,
                  selectedCategory === cat &&
                    browseJobsStyles.filterTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Jobs List */}
        <FlatList
          data={jobs}
          renderItem={renderJobCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={browseJobsStyles.contentContainer}
          scrollEnabled={true}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={browseJobsStyles.bottomNav}>
        <TouchableOpacity style={browseJobsStyles.navItem}>
          <Ionicons
            name="home-outline"
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={browseJobsStyles.navItem}>
          <Ionicons
            name="search-outline"
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={browseJobsStyles.navItem}>
          <Ionicons
            name="bookmark-outline"
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={browseJobsStyles.navItem}>
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