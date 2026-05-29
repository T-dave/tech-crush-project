import { StyleSheet } from 'react-native';

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '../constants/theme'.Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logoContainer: {
    width: 120,
    height: 120,
    backgroundColor: '../constants/theme'.Colors.primaryVariant,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoImage: {
    width: 70,
    height: 70,
    tintColor: '#FFFFFF',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 60,
    maxWidth: '85%',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});