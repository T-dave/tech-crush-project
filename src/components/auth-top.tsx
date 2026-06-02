import { View } from "react-native";
import { ThemedText } from "./themed-text";
import { Colors } from "@/constants/theme";

interface TopProps{
    title: string;
    subtitle: string;
}
export default function Top({title, subtitle}: TopProps){
    return(
        <View style={{marginVertical:10}}>
            <ThemedText type="subtitle" color={Colors.primary}>{title}</ThemedText>
            <ThemedText type="link">{subtitle}</ThemedText>
        </View>
    )
}