import { Platform, StyleSheet, Text, TextStyle, type TextProps } from 'react-native';

import { Fonts, ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'small' | 'smallBold' | 'subtitle' | 'link' | 'linkPrimary' | 'code';
  themeColor?: ThemeColor;
  color?:string;
  weight?:TextStyle['fontWeight'];
  size?: TextStyle['fontSize'];
};

export function ThemedText({ style, type = 'default', themeColor, color, weight, size, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: color ?? theme[themeColor ?? 'text']},
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'small' && styles.small,
        type === 'smallBold' && styles.smallBold,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && styles.link,
        type === 'linkPrimary' && styles.linkPrimary,
        type === 'code' && styles.code,
        weight && { fontWeight: weight },
        size !== undefined && { fontSize: size },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 400,
  },
  smallBold: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 700,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: 500,
  },
  link: {
    lineHeight: 20,
    fontSize: 14,
  },
  linkPrimary: {
    lineHeight: 30,
    fontSize: 14,
    color: '#3c87f7',
  },
  code: {
    fontFamily: Fonts.mono,
    fontWeight: Platform.select({ android: 700 }) ?? 500,
    fontSize: 12,
  },
});
