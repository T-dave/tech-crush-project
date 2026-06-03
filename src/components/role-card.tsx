import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";
import { Colors } from "@/constants/theme";

interface RoleProps{
    title: string;
    role: string;
    image: any;
    clicked: boolean;
    handleClick: ()=>void;
}
export default function Role({title, role, image, clicked, handleClick}: RoleProps){
    const borderColor = clicked ? Colors.primary : '#00000063';
    const borderWidth = clicked ? 2 : 1;
    const backgroundColor = clicked ? "#EFF6FF" : "#FFF";
    return(
        <TouchableOpacity style={[styles.container, { borderColor, borderWidth, backgroundColor }]} onPress={handleClick}>
            <View style={[styles.imageView, { borderColor, borderWidth }]}>
                <View style={[styles.inner, , { borderColor, borderWidth }]}>
                    <Image style={styles.image} source={image}/>
                </View>
            </View>
            <View style={{flex:1}}>
                <ThemedText size={24} weight={500}>{title}</ThemedText>
                <ThemedText color="#000000B2" size={14}>{role}</ThemedText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:16,
        paddingHorizontal:8,
        gap:20,
        borderRadius:16,
        marginVertical:10
    },
    image:{
        width:'100%',
        height:'100%'
    },
    imageView:{
        width:48,
        height:64,
        backgroundColor:'#FFF',
        alignItems:'center',
        paddingTop:22,
        borderRadius:5
    },
    inner:{
        width:32,
        height:32,
        padding:2
    }
});