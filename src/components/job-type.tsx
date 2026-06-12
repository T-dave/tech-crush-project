import homeSheet from "@/styles/homeSheet";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";

interface TypeProps extends ViewProps{
    title:string;
    onPress: ()=>void;
    clicked: boolean;
}
export default function Type({title, onPress, clicked, style}:TypeProps){
    return(
        <TouchableOpacity style={[homeSheet.type, {backgroundColor:clicked?'#D4E2F4':'transparent', borderWidth:clicked?0:1},]} onPress={onPress}>
            <ThemedText type="small">{title}</ThemedText>
        </TouchableOpacity>
    )
}