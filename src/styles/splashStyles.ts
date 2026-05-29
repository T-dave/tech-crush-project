import { Colors } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoImage: {
    width: 140,
    height: 140,
    tintColor: '#FFFFFF',
    marginBottom: 10,
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 60,
    fontWeight:'500'
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});