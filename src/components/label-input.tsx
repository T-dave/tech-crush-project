import { KeyboardTypeOptions, View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";
import Input from "./text-input";

interface LabelInputProps extends ViewProps{
    label: string;
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions | undefined;
}
export default function LabelInput({label, placeholder, keyboardType="default", style}: LabelInputProps){
    return(
        <View style={[{marginVertical:8}, style]}>
            <ThemedText>{label}</ThemedText>
            <Input placeholder={placeholder} keyboardType={keyboardType}/>
        </View>
    )
}