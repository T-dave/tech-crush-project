import homeSheet from "@/styles/homeSheet";
import { View, Image } from "react-native";
import { ThemedText } from "./themed-text";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/theme";

interface CardProps{
    position: string;
    company: string;
    location: string;
    salary: string;
    image: any
}
export default function Card({position, company, location, salary, image}:CardProps){
    return(
        <View style={homeSheet.card}>
            <View style={homeSheet.cardTop}>
                <View style={{flexDirection:'row'}}>
                    <Image style={homeSheet.cardImage} source={image}/>
                    <View>
                        <ThemedText weight={500}>{position}</ThemedText>
                        <ThemedText size={12} style={{lineHeight:15}}>{company}. • {location}</ThemedText>
                        <ThemedText size={11}>{salary}</ThemedText>
                    </View>
                </View>
                <Ionicons name="checkmark-circle" size={23} color={Colors.primary}/>
            </View>
        </View>
    )
}