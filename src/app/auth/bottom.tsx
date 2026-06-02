import Button from "@/components/button";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { authStyles } from "@/styles/auth-styles";
import { router } from "expo-router";
import { View, Image, TouchableOpacity } from "react-native";

interface BottomProps{
    buttonText: string;
    bottomText: string;
    navigation: ()=>void;
}
export default function Bottom({buttonText, bottomText, navigation}: BottomProps){
    return(
            <View style={authStyles.bottom}>
                <Button onPress={()=>console.log("Hii")} title={buttonText}/>
                <View style={authStyles.lineView}>
                    <View style={authStyles.line}/>
                    <ThemedText style={{padding:10, color:'#000000B2'}} type="small">or continue with</ThemedText>
                    <View style={authStyles.line}/>
                </View>
                <View style={authStyles.socials}>
                    <View style={authStyles.social}>
                        <Image source={require('../../../assets/images/apple.png')} style={[authStyles.image, {width:18, height:18}]} resizeMode="contain"/>
                        <ThemedText>Apple</ThemedText>
                    </View>
                    <View style={authStyles.social}>
                        <Image source={require('../../../assets/images/google.png')} style={[authStyles.image, {width:20, height:20}]}/>
                        <ThemedText>Google</ThemedText>
                    </View>
                </View>
                <View style={authStyles.down}>
                    <ThemedText type="small">
                     Already have an account?
                    </ThemedText>
                    <TouchableOpacity onPress={navigation}>
                        <ThemedText type="small" color={Colors.primary}> {bottomText}</ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
    )
}