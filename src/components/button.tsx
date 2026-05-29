import {
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    ViewProps,
} from "react-native";
import { Colors } from "../constants/theme";
import { ThemedText } from "./themed-text";
import { useTheme } from "expo-router";

type Type = "primary" | "secondary";

interface props extends ViewProps {
  onPress: () => void;
  buttonColor?: string;
  textColor?: string;
  type?: Type;
  isLoading?: boolean;
  title: string;
}

export default function Button({
  onPress,
  buttonColor,
  textColor,
  type = "primary",
  isLoading = false,
  title,
  style,
}: props) {
 const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        styles[type],
        {backgroundColor:buttonColor || type==='primary' ? Colors.primary : theme['background']},
        style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size={23} />
      ) : (
        <ThemedText style={[styles.text, {color:textColor || type==='primary' ? "#FFF": "#212FB2"}]}>{title}</ThemedText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  primary: {
    backgroundColor: 'red',
  },
  secondary: {
  },
  text:{
    fontSize:18,
    fontWeight:500
  }
});