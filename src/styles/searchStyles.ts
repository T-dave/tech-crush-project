import { Colors, Spacing } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const searchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.two,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.backgroundElement,
    borderRadius: 8,
    paddingHorizontal: Spacing.two,
    height: 44,
    marginBottom: Spacing.three,
  },
  searchInput: {
    flex: 1,
    marginLeft: Spacing.one,
    color: Colors.light.text,
    fontSize: 14,
  },
  filterContainer: {
    flexDirection: 'row',
    gap: Spacing.one,
    paddingBottom: Spacing.two,
  },
  filterChip: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 20,
    backgroundColor: Colors.light.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
  },
  filterChipActive: {
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
    paddingHorizontal: Spacing.three,
    flex: 1,
  },
  resultTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.textSecondary,
    marginBottom: Spacing.two,
    marginTop: Spacing.three,
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
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.textSecondary,
  },
});