import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, Colors, MaxContentWidth, Spacing } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import * as Device from 'expo-device';
import { router } from 'expo-router';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            Welcome to&nbsp;Tech Crush
          </ThemedText>
        </ThemedView>

        <ThemedText type="code" style={styles.code}>
          Job Portal Screens
        </ThemedText>

        {/* Test Screens */}
        <ThemedView type="backgroundElement" style={styles.stepContainer}>
          <ThemedText type="subtitle" style={{ marginBottom: Spacing.two }}>
            Test New Screens:
          </ThemedText>

          {/* Screen 8: Apply Flow */}
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => router.push('/applyFlow')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="document-text"
              size={20}
              color={Colors.secondary}
            />
            <ThemedText type="default" style={styles.navButtonText}>
              Screen 8: Apply Flow
            </ThemedText>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.secondary}
            />
          </TouchableOpacity>

          {/* Screen 9: Review & Submit */}
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => router.push('/reviewSubmit')}
            activeOpacity={0.7}
          >
            <Ionicons name="checkmark-circle" size={20} color={Colors.secondary} />
            <ThemedText type="default" style={styles.navButtonText}>
              Screen 9: Review & Submit
            </ThemedText>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.secondary}
            />
          </TouchableOpacity>

          {/* Screen 10: Saved Jobs */}
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => router.push('/savedJobs')}
            activeOpacity={0.7}
          >
            <Ionicons name="bookmark" size={20} color={Colors.secondary} />
            <ThemedText type="default" style={styles.navButtonText}>
              Screen 10: Saved Jobs
            </ThemedText>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.secondary}
            />
          </TouchableOpacity>
        </ThemedView>

        {/* Dev Tools Info */}
        <ThemedView type="backgroundElement" style={styles.stepContainer}>
          <HintRow
            title="Try editing"
            hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
          />
          <HintRow title="Dev tools" hint={getDevMenuHint()} />
          <HintRow
            title="Fresh start"
            hint={<ThemedText type="code">npm run reset-project</ThemedText>}
          />
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  navButton: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.two,
    gap: Spacing.two,
  },
  navButtonText: {
    flex: 1,
    fontWeight: '600',
    color: Colors.secondary,
  },
});