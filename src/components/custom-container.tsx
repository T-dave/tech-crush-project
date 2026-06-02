import { KeyboardAvoidingView, Platform, ScrollView, useColorScheme, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ContainerProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;
};

export default function Container({children, style, lightColor, darkColor, type}: ContainerProps){
    const theme = useTheme();
    const colorScheme = useColorScheme();
    
      const backgroundColor =
        colorScheme === 'dark'
          ? darkColor ?? theme[type ?? 'background']
          : lightColor ?? theme[type ?? 'background'];
    return(
        <SafeAreaView style={{flex:1, backgroundColor}}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView contentContainerStyle={[{ flexGrow:1 }, style]} showsVerticalScrollIndicator={false}>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}