import { Colors, Spacing } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const savedJobsStyles = StyleSheet.create({
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
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
  },
  filterButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.light.textSecondary,
  },
  filterTextActive: {
    color: Colors.secondary,
  },
  contentContainer: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    paddingBottom: Spacing.five,
  },
  jobCard: {
    backgroundColor: Colors.light.backgroundElement,
    borderRadius: 12,
    padding: Spacing.two,
    marginBottom: Spacing.two,
    flexDirection: 'row',
    gap: Spacing.two,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
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
  companyNameText: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    marginBottom: Spacing.half,
  },
  jobMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  jobType: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    paddingHorizontal: Spacing.one,
    paddingVertical: Spacing.half,
    backgroundColor: Colors.light.background,
    borderRadius: 4,
  },
  savedDate: {
    fontSize: 12,
    color: Colors.light.textSecondary,
  },
  saveButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Spacing.five,
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItemActive: {
    backgroundColor: 'rgba(37, 99, 235, 0.1)',
    borderRadius: 8,
  },
});