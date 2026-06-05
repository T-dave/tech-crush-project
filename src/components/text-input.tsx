import { KeyboardTypeOptions, StyleSheet, TextInput, View, ViewProps } from "react-native";

interface InputProps extends ViewProps{
    placeholder:string | undefined;
    keyboardType?: KeyboardTypeOptions;
}
export default function Input({placeholder, keyboardType, style}:InputProps){
    return(
        <View style={[styles.container, style]}>
            <TextInput placeholder={placeholder} style={styles.input} keyboardType={keyboardType}/>
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
    },
    input:{
        flex:1
    }
});