import {Top2} from "@/components/auth-top";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import LabelInput from "@/components/label-input";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import setupSheet from "@/styles/setupSheet";
import { router } from "expo-router";
import { View } from "react-native";

export default function Setup(){
    // const [ step, setStep ] = useState(1);
    // const handleStep1 = ()=>{
    //     setStep(2)
    // }
    return(
        <Container style={{padding:20}}>
            <View style={setupSheet.logo}>
                <ThemedText weight={700} size={24}>Launch</ThemedText>
                <ThemedText weight={700} size={24} color={Colors.primary}>Pad</ThemedText>
            </View>
            <Top2 title="Welcome back" subtitle="Enter your email and we we’ll send you a reset link."/>
            <LabelInput label="Email Address" placeholder="Enter your email"/>
            <Button onPress={()=>router.navigate('/setup/role')} title="Send Reset Link" style={{marginTop:20}}/>
            <Button onPress={()=>console.log('hii')} title="Back to Sign in" buttonColor="#FFF" textColor={Colors.primary}/>
        </Container>
    )
}

// {
//                 step === 1 ?
//                 <Reset handleNext={handleStep1}/>
//                 :
//                 <></>
//             }