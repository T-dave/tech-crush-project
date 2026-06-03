import LabelInput from "@/components/label-input";
import { ThemedText } from "@/components/themed-text";
import { View } from "react-native";

export function Cv(){
    return(
        <View>
            <ThemedText type="title" style={{marginTop:10}}>Upload your CV</ThemedText>
            <ThemedText style={{color:'#95A2B5', fontSize:14}}>Employers use this to understand your experience.</ThemedText>
        </View>
    )
}

export function PersonalInfo(){
    return(
        <View>
            <ThemedText type="title" style={{marginTop:10}}>Personal information</ThemedText>
            <LabelInput label="Full Name" placeholder="Tunde Adeleke"/>
            <LabelInput label="Full Name" placeholder="Tunde Adeleke"/>
            <LabelInput label="Full Name" placeholder="Tunde Adeleke"/>
            <LabelInput label="Full Name" placeholder="Tunde Adeleke"/>
            <LabelInput label="Full Name" placeholder="Tunde Adeleke"/>
        </View>
    )
}