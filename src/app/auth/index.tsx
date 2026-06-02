import Button from "@/components/button"
import Container from "@/components/custom-container"
import { ThemedText } from "@/components/themed-text"
import { Colors } from "@/constants/theme"
import { authStyles } from "@/styles/auth-styles"
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
export default function Register(){
    return(
        <Container>
            <View style = {authStyles.launchpadView}>
                <ThemedText type="small" color="#FFF">JOIN LAUNCHPAD</ThemedText>
            </View>
            <View>
                <ThemedText type="subtitle" color={Colors.primary}>Create a free account</ThemedText>
                <ThemedText type="link">Verified internship & jobs built for beginners like you</ThemedText>
            </View>
            <View>
                <ThemedText>I AM A</ThemedText>
                <View style={authStyles.typeView}>
                    <Button onPress={()=>console.log("Hii")} title="Job Seeker" style={authStyles.type}/>
                    <Button onPress={()=>console.log("Hii")} title="Employer" style={authStyles.type}/>
                </View>
            </View>
            <View>
                {/* <TouchableOpacity style={authStyles.box}></TouchableOpacity> */}
                <ThemedText type="small">
                    I agree to the 
                    <ThemedText type="small" color={Colors.primary}> Terms of Service </ThemedText>
                    and 
                    <ThemedText type="small" color={Colors.primary}> Privacy Policy</ThemedText>.
                </ThemedText>
            </View>
            <Button onPress={()=>console.log("Hii")} title="Create Account"/>
                <ThemedText type="small">
                    Already have an account?
                    <ThemedText type="small" color={Colors.primary}> Log In</ThemedText>
                </ThemedText>
        </Container>
    )
}
