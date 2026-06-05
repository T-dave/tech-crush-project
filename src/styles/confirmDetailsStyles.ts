import { Colors, Spacing } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const confirmDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.two,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  jobCard: {
    backgroundColor: Colors.light.backgroundElement,
    borderRadius: 12,
    padding: Spacing.three,
    marginBottom: Spacing.three,
  },
  jobHeader: {
    flexDirection: 'row',
    gap: Spacing.two,
    marginBottom: Spacing.two,
  },
  jobLogo: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.secondary,
  },
  jobTitleSection: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: Spacing.half,
  },
  companyName: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    marginBottom: Spacing.half,
  },
  jobType: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.light.backgroundSelected,
    marginVertical: Spacing.two,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.one,
  },
  detailLabel: {
    fontSize: 13,
    color: Colors.light.textSecondary,
  },
  detailValue: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.light.text,
  },
  section: {
    marginBottom: Spacing.four,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: Spacing.two,
  },
  description: {
    fontSize: 13,
    color: Colors.light.text,
    lineHeight: 20,
  },
  requirements: {
    fontSize: 13,
    color: Colors.light.text,
    marginBottom: Spacing.one,
  },
  benefits: {
    fontSize: 13,
    color: Colors.light.text,
    marginBottom: Spacing.one,
  },
  buttonContainer: {
    paddingHorizontal: Spacing.three,
    paddingBottom: Spacing.three,
  },
  applyButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.two,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: Colors.secondary,
    fontSize: 14,
    fontWeight: '600',
  },
});