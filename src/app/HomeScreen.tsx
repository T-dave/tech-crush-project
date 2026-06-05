import { Colors } from '@/constants/theme';
import { homeStyles } from '@/styles/homeStyles';
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
  salary: string;
  initial: string;
  saved: boolean;
}

export default function HomeScreen() {
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
      saved: false,
    },
    {
      id: '2',
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'Lagos',
      salary: '$45k-60k',
      initial: 'D',
      saved: false,
    },
    {
      id: '3',
      title: 'Backend Engineer',
      company: 'Data Systems',
      location: 'Remote',
      salary: '$60k-85k',
      initial: 'D',
      saved: false,
    },
  ]);

  const categories = ['All', 'Design', 'Tech', 'Marketing', 'Sales'];

  const toggleSave = (id: string) => {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, saved: !job.saved } : job
      )
    );
  };

  const renderJobCard = ({ item }: { item: Job }) => (
    <TouchableOpacity
      style={homeStyles.jobCard}
      onPress={() =>
        router.push({
          pathname: '/confirmDetails',
          params: { job: JSON.stringify(item) }
        })
      }
    >
      <View style={homeStyles.jobLogo}>
        <Text style={{ fontSize: 20, fontWeight: '600', color: Colors.secondary }}>
          {item.initial}
        </Text>
      </View>

      <View style={homeStyles.jobInfo}>
        <Text style={homeStyles.jobTitle}>{item.title}</Text>
        <Text style={homeStyles.companyName}>{item.company}</Text>
        <View style={homeStyles.jobMeta}>
          <Text style={homeStyles.location}>📍 {item.location}</Text>
          <Text style={homeStyles.salary}>{item.salary}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={homeStyles.saveButton}
        onPress={() => toggleSave(item.id)}
      >
        <Ionicons
          name={item.saved ? 'star' : 'star-outline'}
          size={24}
          color={item.saved ? '#FFD700' : Colors.light.textSecondary}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View style={homeStyles.container}>
        {/* Header */}
        <View style={homeStyles.header}>
          <View style={homeStyles.headerTop}>
            <Text style={homeStyles.greeting}>Hello, User! 👋</Text>
            <TouchableOpacity style={homeStyles.notificationIcon}>
              <Ionicons
                name="notifications-outline"
                size={20}
                color={Colors.light.text}
              />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={homeStyles.searchContainer}>
            <View style={homeStyles.searchBox}>
              <Ionicons
                name="search"
                size={18}
                color={Colors.light.textSecondary}
              />
              <TextInput
                style={homeStyles.searchInput}
                placeholder="Search jobs..."
                placeholderTextColor={Colors.light.textSecondary}
              />
            </View>
            <TouchableOpacity
              style={homeStyles.filterButton}
              onPress={() => router.push('/filterBrowsing')}
            >
              <Ionicons name="funnel" size={20} color={Colors.secondary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Content */}
        <ScrollView
          style={homeStyles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Categories */}
          <Text style={homeStyles.sectionTitle}>Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={homeStyles.categoryContainer}
          >
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  homeStyles.categoryButton,
                  selectedCategory === cat &&
                    homeStyles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(cat)}
              >
                <Text
                  style={[
                    homeStyles.categoryText,
                    selectedCategory === cat &&
                      homeStyles.categoryTextActive,
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Jobs List */}
          <Text style={homeStyles.sectionTitle}>Featured Jobs</Text>
          <FlatList
            data={jobs}
            renderItem={renderJobCard}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            nestedScrollEnabled={false}
          />
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <View style={homeStyles.bottomNav}>
        <TouchableOpacity style={homeStyles.navItem}>
          <Ionicons name="home" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={homeStyles.navItem}
          onPress={() => router.push('/search')}
        >
          <Ionicons
            name="search-outline"
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={homeStyles.navItem}
          onPress={() => router.push('/savedJobs')}
        >
          <Ionicons
            name="bookmark-outline"
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.navItem}>
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