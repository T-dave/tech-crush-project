import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";
import Button from "./button";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <ThemedText size={18} weight={500}>UI/UX Design Intern</ThemedText>
                    <ThemedText size={14}>TechCorp Nigeria Lagos</ThemedText>
                </View>
                <Button title="Withdraw" onPress={()=>console.log("Hii")} textSize={12} style={{height:32, paddingHorizontal:10}}/>
            </View>
            <View style={{flexDirection:'row', marginVertical:10}}>
                <View style={[styles.type, {borderColor:'#2563EBBF', backgroundColor:'#2563EB33',}]}>
                    <ThemedText size={14} weight={500} color={Colors.primary}>Internship</ThemedText>
                </View>
                <View style={[styles.type, {borderColor:'#8A8A8ABF', backgroundColor:'#8A8A8A33',}]}>
                    <ThemedText size={14} weight={500} color={"#00000080"}>Internship</ThemedText>
                </View>
            </View>
             <View style={{flexDirection:'row', marginVertical:10}}>
                <View style={styles.info}>
                    <Image source={require('../../assets/images/vector1.png')} style={{width:16, height:17, marginRight:10}}/>
                    <ThemedText size={14} weight={500} color="#00000080">$400 - $600/mo</ThemedText>
                </View>
                <View style={styles.info}>
                    <Image source={require('../../assets/images/vector2.png')} style={{width:16, height:16, marginRight:10}}/>
                    <ThemedText size={14} weight={500} color="#00000080">0 - 1 yr exp</ThemedText>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.info}>
                    <Ionicons name="calendar-outline" size={17} style={{marginRight:5}} color={"#32AD5F"}/>
                    <ThemedText size={14} weight={500} color="#32AD5F">Closes Jun 30</ThemedText>
                </View>
                <View style={styles.info}>
                    <Ionicons name="time-outline" size={17} style={{marginRight:5}} color={"#32AD5F"}/>
                    <ThemedText size={14} weight={500} color="#32AD5F">Posted Today</ThemedText>
                </View>
            </View>
            <View style={{flexDirection:'row', marginVertical:10}}>
                <View  style={[styles.type, {borderColor:'#8A8A8ABF', backgroundColor:'#8A8A8A33',}]}>
                    <ThemedText size={14} weight={500} color={"#8A38F5"}>Figma</ThemedText>
                </View>
                <View style={[styles.type, {borderColor:'#8A8A8ABF', backgroundColor:'#8A8A8A33',}]}>
                    <ThemedText size={14} weight={500} color={"#8A38F5"}>UI Design</ThemedText>
                </View>
                <View style={[styles.type, {borderColor:'#8A8A8ABF', backgroundColor:'#8A8A8A33',}]}>
                    <ThemedText size={14} weight={500} color={"#8A38F5"}>Wireframing</ThemedText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:0.5,
        borderColor:'#C3C6D7',
        borderRadius:8,
        padding:10,
        marginVertical:10
    },
    top:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    type:{
        borderWidth:0.5,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:32,
        alignSelf:'flex-start',
        marginRight:10
    },
    info:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:20
    }
});