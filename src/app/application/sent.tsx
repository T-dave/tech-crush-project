import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import applicationSheet from "@/styles/applicationSheet";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { Image } from "react-native";

export default function Sent(){
    return(
        <Container style={{paddingHorizontal:20}}>
            <View style={applicationSheet.sentTop}>
                <Image style={{width:80, height:80, marginBottom:24}} source={require('../../../assets/images/check.png')} resizeMode="contain"/>
                <View>
                    <ThemedText style={{textAlign:'center'}} type="subtitle">Application Sent!</ThemedText>
                    <ThemedText style={{textAlign:'center', maxWidth:280}} weight={500}>You applied to UI/UX Design Intern at TechCorp NG. You're one step closer.</ThemedText>
                </View>
            </View>
            <View style={applicationSheet.buttons}>
                <TouchableOpacity style={[applicationSheet.browseButton, {marginTop:0, marginRight:15}]}>
                    <ThemedText size={14}>View Applications</ThemedText>
                </TouchableOpacity>
                <Button onPress={()=>router.navigate('/application/sent')} title={"View Applications"} style={{flex:1}}/>
            </View>
        </Container>
    )
}