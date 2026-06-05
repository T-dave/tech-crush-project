import { Colors, Spacing } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const browseJobsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.two,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.light.text,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.three,
    paddingBottom: Spacing.two,
    gap: Spacing.one,
  },
  filterButton: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 20,
    backgroundColor: Colors.light.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
  },
  filterButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.light.textSecondary,
  },
  filterTextActive: {
    color: Colors.secondary,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  jobCard: {
    backgroundColor: Colors.light.backgroundElement,
    borderRadius: 12,
    padding: Spacing.two,
    marginBottom: Spacing.two,
    flexDirection: 'row',
    gap: Spacing.two,
  },
  jobLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.secondary,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: Spacing.half,
  },
  companyName: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    marginBottom: Spacing.half,
  },
  jobMeta: {
    flexDirection: 'row',
    gap: Spacing.one,
  },
  location: {
    fontSize: 11,
    color: Colors.light.textSecondary,
  },
  salary: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.light.text,
  },
  applyButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.one,
    paddingVertical: Spacing.half,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: {
    color: Colors.secondary,
    fontSize: 11,
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.textSecondary,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.light.background,
    paddingVertical: Spacing.two,
    borderTopWidth: 1,
    borderTopColor: Colors.light.backgroundSelected,
  },
  navItem: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});