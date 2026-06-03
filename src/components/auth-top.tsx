import { View } from "react-native";
import { ThemedText } from "./themed-text";
import { Colors } from "@/constants/theme";

interface TopProps{
    title: string;
    subtitle: string;
}
export function Top1({title, subtitle}: TopProps){
    return(
        <View style={{marginVertical:10}}>
            <ThemedText type="title" color={Colors.primary}>{title}</ThemedText>
            <ThemedText type="link">{subtitle}</ThemedText>
        </View>
    )
}

export function Top2({title, subtitle}: TopProps){
    return(
        <View style={{marginVertical:10}}>
            <ThemedText type="title">{title}</ThemedText>
            <ThemedText type="link">{subtitle}</ThemedText>
        </View>
    )
}