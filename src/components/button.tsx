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
  textSize?: number;
}

export default function Button({
  onPress,
  buttonColor,
  textColor,
  type = "primary",
  isLoading = false,
  textSize=16,
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
        {backgroundColor:buttonColor ? buttonColor : type==='primary' ? Colors.primary : "#2563EB14"},
        style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size={23} />
      ) : (
        <ThemedText style={[styles.text, {color:textColor ? textColor : type==='primary' ? "#FFF": "#212FB2", fontSize:textSize}]}>{title}</ThemedText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height:50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent:'center'
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