import { View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";
import Input from "./text-input";

interface LabelInputProps extends ViewProps{
    label: string;
    placeholder?: string;
}
export default function LabelInput({label, placeholder, style}: LabelInputProps){
    return(
        <View style={[{marginVertical:8}, style]}>
            <ThemedText>{label}</ThemedText>
            <Input placeholder={placeholder}/>
        </View>
    )
}