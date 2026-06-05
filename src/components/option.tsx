import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { ThemedText } from "./themed-text";
import listingSheet from "@/styles/listingSheet";
import { Colors } from "@/constants/theme";

interface OptionProps extends TouchableOpacityProps{
    title:  string;
    clicked: boolean;
    handleClick: ()=>void
}
export default function Option({title, clicked, handleClick, style}:OptionProps){
    return(
        <TouchableOpacity style={[listingSheet.optionContainer, style, {borderColor: clicked ? Colors.primary : '#00000040'}]} onPress={handleClick}>
            <View style={[listingSheet.radio, {borderColor:clicked ? Colors.primary : '#1A1A1A40'}]}>
                {
                    clicked &&
                    <View style={listingSheet.radioCircle}/>
                }
            </View>
            <ThemedText size={15} color={clicked ? Colors.primary : '#000000B2'}>{title}</ThemedText>
        </TouchableOpacity>
    )
}