import { KeyboardTypeOptions, StyleSheet, TextInput, TextInputProps, TextStyle, View, ViewProps } from "react-native";

interface InputProps extends TextInputProps {
    keyboardType?: KeyboardTypeOptions;
    style?:ViewProps;
    color?: TextStyle['color'];
}
export default function Input({placeholder, keyboardType, color, style}:InputProps){
    return(
        <View style={[styles.container, style]}>
            <TextInput placeholder={placeholder} style={[styles.input, {color}]} keyboardType={keyboardType} placeholderTextColor={color}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:"#2563EB66",
        borderRadius:5,
        height:50,
        padding:5,
        flex:1
    },
    input:{
        flex:1
    }
});