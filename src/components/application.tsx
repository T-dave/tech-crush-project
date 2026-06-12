import { Image, TextInput, TouchableOpacity, View } from "react-native";
import Card from "./application-card";
import applicationSheet from "@/styles/applicationSheet";
import { ThemedText } from "./themed-text";
import Detail from "./application-detail";
import { Colors } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Details(){
    return(
        <View>
            <Card
            position="UI/UX Design Intern"
            company="TechCorp Intl"
            location="Lagos"
            salary="N40k - N80K"
            image={require("../../assets/images/techCorp.png")}
            />
            <View style={applicationSheet.textView}>
                <ThemedText>
                    We'll use your saved profile details below. Review and update anything before continuing.
                </ThemedText>
            </View>
            <View style={applicationSheet.details}>
                <Detail label="Full Name" info="Tunde Adeleke" icon="person-outline" style={applicationSheet.detailMiddle}/>
                <Detail label="Email" info="tunde@email.com" icon="mail-outline" style={applicationSheet.detailMiddle}/>
                <Detail label="Phone" info="+234 800 000 0000" icon="call-outline" style={applicationSheet.detailMiddle}/>
                <Detail label="Location" info="Lagos, Nigeria" icon="location-outline" style={applicationSheet.detailMiddle}/>
                <Detail label="Portfolio" info="tunde.design" icon="briefcase-outline"/>
            </View>
            <View style={{marginVertical:20}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <ThemedText type="small">Linkedin Profile</ThemedText>
                    <ThemedText type="small" color={Colors.primary}>Optional</ThemedText>
                </View>
                <View style={applicationSheet.inputView}>
                    <Ionicons name="link" size={20} color="#76777D" style={{marginRight:10}}/>
                    <TextInput placeholder="linkedin.com/in/your-profile"/>
                </View>
            </View>
        </View>
    )
}

export function Resume(){
    return(
        <View>
            <View style={{marginVertical:20}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <ThemedText>USE SAVED RESUME</ThemedText>
                    <View style={applicationSheet.line}/>
                </View>
                <View style={applicationSheet.resumeView}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image style={{width:48, height:56}} source={require('../../assets/images/document.png')}/>
                        <View style={{marginLeft:10}}>
                            <ThemedText weight={500}>Tunde_CV_2026.pdf</ThemedText>
                            <ThemedText size={14}>Uploaded May 20 • 420KB</ThemedText>
                        </View>
                    </View>
                    <Ionicons name="checkmark-circle" size={24} color={Colors.primary}/>
                </View>
            </View>

            <View style={{marginVertical:20}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <ThemedText>USE SAVED RESUME</ThemedText>
                    <View style={applicationSheet.line}/>
                </View>
                <View style={applicationSheet.resumeView2}>
                    <Image style={{width:64, height:83}} source={require('../../assets/images/document.png')} resizeMode="contain"/>
                    <View>
                        <ThemedText weight={500} color={Colors.primary}>Upload CV / Resume</ThemedText>
                        <ThemedText size={14} color={Colors.primary}>PDF or DOCX • Max 5MB</ThemedText>
                    </View>
                    <TouchableOpacity style={applicationSheet.browseButton}>
                        <ThemedText size={14} color={Colors.primary}>Browse Files</ThemedText>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{marginVertical:20}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <ThemedText size={14} color={Colors.primary}>Cover Note</ThemedText>
                    <ThemedText size={14} color={Colors.primary}>Optional • 300 chars</ThemedText>
                </View>
                <View style={applicationSheet.inputView}>
                    <TextInput placeholder="Share a brief message with the hiring team..." style={{height:128, textAlignVertical:'top'}} multiline/>
                </View>
            </View>
        </View>
    )
}