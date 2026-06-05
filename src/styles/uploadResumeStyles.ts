import { Colors, Spacing } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const uploadResumeStyles = StyleSheet.create({
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
    marginBottom: Spacing.one,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.light.textSecondary,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Spacing.three,
  },
  uploadSection: {
    marginTop: Spacing.three,
    marginBottom: Spacing.four,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: Spacing.two,
  },
  uploadBox: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: Spacing.four,
    alignItems: 'center',
    backgroundColor: 'rgba(37, 99, 235, 0.05)',
  },
  uploadIcon: {
    fontSize: 40,
    marginBottom: Spacing.two,
  },
  uploadText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: Spacing.half,
  },
  uploadSubtext: {
    fontSize: 12,
    color: Colors.light.textSecondary,
  },
  fileItem: {
    backgroundColor: Colors.light.backgroundElement,
    padding: Spacing.two,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing.two,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
  },
  fileInfo: {
    flex: 1,
  },
  fileName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
  },
  fileSize: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    marginTop: Spacing.half,
  },
  removeButton: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '600',
  },
  radioGroup: {
    marginVertical: Spacing.two,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.one,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.light.backgroundSelected,
    marginRight: Spacing.two,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioActive: {
    borderColor: Colors.primary,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  radioLabel: {
    fontSize: 13,
    color: Colors.light.text,
  },
  buttonContainer: {
    paddingHorizontal: Spacing.three,
    paddingBottom: Spacing.three,
    gap: Spacing.two,
  },
  button: {
    paddingVertical: Spacing.two,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  primaryButtonText: {
    color: Colors.secondary,
    fontSize: 14,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: Colors.light.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
  },
  secondaryButtonText: {
    color: Colors.light.text,
    fontSize: 14,
    fontWeight: '600',
  },
});