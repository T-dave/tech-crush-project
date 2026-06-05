import { Colors, Spacing } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const filterBrowsingStyles = StyleSheet.create({
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
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.text,
  },
  closeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Spacing.three,
  },
  filterSection: {
    marginBottom: Spacing.four,
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: Spacing.two,
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.one,
    marginBottom: Spacing.one,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
    marginRight: Spacing.two,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  optionLabel: {
    fontSize: 13,
    color: Colors.light.text,
    flex: 1,
  },
  sliderContainer: {
    marginTop: Spacing.two,
    marginBottom: Spacing.two,
  },
  sliderLabel: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    marginBottom: Spacing.one,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingBottom: Spacing.three,
  },
  button: {
    flex: 1,
    paddingVertical: Spacing.two,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButton: {
    backgroundColor: Colors.primary,
  },
  resetButton: {
    backgroundColor: Colors.light.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
  },
  applyButtonText: {
    color: Colors.secondary,
    fontSize: 14,
    fontWeight: '600',
  },
  resetButtonText: {
    color: Colors.light.text,
    fontSize: 14,
    fontWeight: '600',
  },
});