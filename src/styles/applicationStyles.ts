import { Colors, Spacing } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const applicationStyles = StyleSheet.create({
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
    paddingVertical: Spacing.two,
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
  input: {
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
    borderRadius: 8,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.two,
    fontSize: 13,
    backgroundColor: Colors.light.background,
    color: Colors.light.text,
    marginBottom: Spacing.two,
  },
  textArea: {
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
    borderRadius: 8,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.two,
    fontSize: 13,
    backgroundColor: Colors.light.background,
    color: Colors.light.text,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: Spacing.two,
  },
  row: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  rowItem: {
    flex: 1,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.one,
  },
  checkboxBox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
    marginRight: Spacing.one,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxBoxActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  checkboxLabel: {
    fontSize: 13,
    color: Colors.light.text,
    flex: 1,
  },
  agreeText: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    lineHeight: 18,
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
  submitButton: {
    backgroundColor: Colors.primary,
  },
  cancelButton: {
    backgroundColor: Colors.light.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
  },
  submitButtonText: {
    color: Colors.secondary,
    fontSize: 14,
    fontWeight: '600',
  },
  cancelButtonText: {
    color: Colors.light.text,
    fontSize: 14,
    fontWeight: '600',
  },
});