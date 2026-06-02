import Top from "@/components/auth-top"
import Button from "@/components/button"
import Container from "@/components/custom-container"
import LabelInput from "@/components/label-input"
import { ThemedText } from "@/components/themed-text"
import { Colors } from "@/constants/theme"
import { authStyles } from "@/styles/auth-styles"
import { useState } from "react"
import { Text, TouchableOpacity, TouchableWithoutFeedback, View, Image } from "react-native"
import Bottom from "./bottom"
import { router } from "expo-router"
export default function LogIn(){
    const [ tick, setTick ] = useState(false);
    const [ type, setType ] = useState("seeker")
    return(
        <Container style={{paddingHorizontal:20}}>
            <Top title="Welcome back" subtitle="SIgn in to your account"/>
            <View style={{marginVertical:20}}>
                <ThemedText>Sign in as</ThemedText>
                <View style={authStyles.typeView}>
                    <Button 
                        onPress={()=>setType("seeker")} 
                        title="Job Seeker" 
                        style={authStyles.type} 
                        buttonColor={type === "seeker" ? Colors.primary : "#2563EB14"}
                        textColor={type === "seeker" ? "#FFF" : "#000000B2"}
                    />
                    <Button
                        onPress={()=>setType("employer")}
                        title="Employer" style={authStyles.type}
                        buttonColor={type === "employer" ? Colors.primary : "#2563EB14"}
                        textColor={type === "employer" ? "#FFF" : "#000000B2"}
                    />
                </View>
            </View>
            <View>
                <LabelInput label="Email Address" placeholder="tunde@gmail.com"/>
                <LabelInput label="Password"/>
            </View>
            <View style={authStyles.terms}>
                <TouchableOpacity style={authStyles.box} onPress={()=>setTick(!tick)}>
                    {
                        tick && 
                        <Text style={{fontSize:9}}>✔️</Text>
                    }
                </TouchableOpacity>
                <ThemedText type="small">
                    I agree to the 
                    <ThemedText type="small" color={Colors.primary}> Terms of Service </ThemedText>
                    and 
                    <ThemedText type="small" color={Colors.primary}> Privacy Policy</ThemedText>.
                </ThemedText>
            </View>
            <Bottom buttonText="Log In" bottomText="Sign Up" navigation={()=>router.replace('/auth')}/>
        </Container>
    )
}
