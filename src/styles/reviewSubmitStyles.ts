import { Colors, Spacing } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const reviewSubmitStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.three,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.text,
  },
  contentContainer: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    flex: 1,
  },
  reviewCard: {
    backgroundColor: Colors.light.backgroundElement,
    borderRadius: 12,
    padding: Spacing.three,
    marginBottom: Spacing.four,
  },
  jobHeader: {
    marginBottom: Spacing.three,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: Spacing.half,
  },
  companyName: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.light.backgroundSelected,
    marginBottom: Spacing.two,
  },
  fieldGroup: {
    marginBottom: Spacing.two,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.light.textSecondary,
    marginBottom: Spacing.one,
    textTransform: 'uppercase',
  },
  fieldValue: {
    fontSize: 14,
    color: Colors.light.text,
    fontWeight: '500',
  },
  fileDisplay: {
    backgroundColor: Colors.light.background,
    padding: Spacing.two,
    borderRadius: 8,
    marginTop: Spacing.one,
  },
  fileName: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.light.text,
  },
  successMessage: {
    backgroundColor: Colors.light.backgroundElement,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
    padding: Spacing.three,
    borderRadius: 8,
    marginBottom: Spacing.four,
  },
  successIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: Spacing.three,
  },
  successText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.text,
    textAlign: 'center',
    marginBottom: Spacing.one,
  },
  successSubtext: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: Spacing.three,
    paddingBottom: Spacing.five,
    gap: Spacing.two,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.two,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingVertical: Spacing.two,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
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
});