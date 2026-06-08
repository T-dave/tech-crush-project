import { KeyboardAvoidingView, Platform, ScrollView, useColorScheme, ViewProps } from "react-native";
import { Edges, SafeAreaView } from "react-native-safe-area-context";
import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ContainerProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;
  edges?: Edges | undefined;
};

export default function Container({children, style, lightColor, darkColor, type, edges=['bottom', "top"]}: ContainerProps){
    const theme = useTheme();
    const colorScheme = useColorScheme();
    
      const backgroundColor =
        colorScheme === 'dark'
          ? darkColor ?? theme[type ?? 'background']
          : lightColor ?? theme[type ?? 'background'];
    return(
        <SafeAreaView style={{flex:1, backgroundColor}} edges={edges}>
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