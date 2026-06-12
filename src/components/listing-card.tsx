import listingSheet from "@/styles/listingSheet";
import { View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";
import { Colors } from "@/constants/theme";

interface CardProps extends ViewProps{
    title: string;
}
export default function Card({title, children, style}: CardProps){
    return(
        <View style={[listingSheet.card, style]}>
            <View style={listingSheet.cardTop}>
                <View style={listingSheet.circle}/>
                <ThemedText color={Colors.primary} weight={700}>{title}</ThemedText>
            </View>
            <View>
                {children}
             </View>
        </View>
    )
}