import homeSheet from "@/styles/homeSheet";
import { View, Image } from "react-native";
import { ThemedText } from "./themed-text";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "./button";
import { Colors } from "@/constants/theme";

interface CardProps{
    position: string;
    company: string;
    location: string;
    tags: string[];
    salary: string;
    time: string;
    image: any
}
export default function Card({position, company, location, tags, salary, time, image}:CardProps){
    return(
        <View style={homeSheet.card}>
            <View style={homeSheet.cardTop}>
                <View style={{flexDirection:'row'}}>
                    <Image style={homeSheet.cardImage} source={image}/>
                    <View>
                        <ThemedText weight={500}>{position}</ThemedText>
                        <ThemedText size={12} style={{lineHeight:15}}>{company}. • {location}</ThemedText>
                        <View style={homeSheet.tags}>
                            {
                                tags.map((tag, index)=><View key={index} style={homeSheet.tag}>
                                    <ThemedText size={11}>{tag}</ThemedText>
                                        </View>)
                            }
                        </View>
                    </View>
                </View>
                <Ionicons name="bookmark-outline" size={18} color={Colors.primary}/>
            </View>
            <View style={[homeSheet.row, {justifyContent:'space-between'}]}>
                <ThemedText size={11}>{salary} • {time} ago</ThemedText>
                <Button
                    title="Apply"
                    onPress={()=>console.log("Hii")}
                    textSize={12}
                    style={{paddingHorizontal:15, height:32}}
                />
            </View>
        </View>
    )
}