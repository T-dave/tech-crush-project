import LabelInput from "@/components/label-input";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

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
            <LabelInput label="Phone Number" placeholder="+234 800 000 0000" keyboardType="numeric"/>
            <LabelInput label="Location" placeholder="Lagos, Nigeria"/>
            <LabelInput label="Portfolio link" placeholder="https://tunde.dev"/>
            <LabelInput label="GitHub link" placeholder="github.com/tunde"/>
        </View>
    )
}

export function Skills(){
    const skills = ['Python', 'JavaScript', 'React', 'Figma', 'UI/UX', 'HTML/CSS', 'Node.js', 'Product Design', 'SQL', 'Django'];
    const [ selectedSkills, setSkills ] = useState<string[]>([]);
    const handleSkill = (skill:string)=>{
        if(!selectedSkills.includes(skill)){
            setSkills([...selectedSkills, skill])
        }else{
            let index = selectedSkills.indexOf(skill);
            let temp = [...selectedSkills];
            temp.splice(index, 1);
            setSkills([...temp])
        }
    }
    const borderColor = (skill:string)=> selectedSkills.includes(skill) ? Colors.primary : '#00000063';
    const backgroundColor = (skill:string)=> selectedSkills.includes(skill) ? '#EFF6FF' : 'transparent';
    const color = (skill:string)=> selectedSkills.includes(skill) ? Colors.primary : '#000000B2';
    return(
        <View>
            <ThemedText type="title" style={{marginTop:10}}>What are your skills?</ThemedText>
            <LabelInput label="" placeholder="Search skills"/>
            <View style={stepsSheet.skillsView}>
                {
                    skills.map((skill, index)=>(
                        <TouchableOpacity 
                            style={[stepsSheet.skillView, {borderColor: borderColor(skill), backgroundColor:backgroundColor(skill)}]} 
                            key={index}
                            onPress={()=>handleSkill(skill)}
                        >
                            <ThemedText size={11} color={color(skill)}>{skill}</ThemedText>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export function Preferences(){
    const type = ['Internship', 'Full-time', 'Freelance', 'Part-time'];
    const mode = ['Remote', 'Hybrid', 'On-site'];
    const [ selectedSkills, setSkills ] = useState<string[]>([]);
    const handleSkill = (skill:string)=>{
        if(!selectedSkills.includes(skill)){
            setSkills([...selectedSkills, skill])
        }else{
            let index = selectedSkills.indexOf(skill);
            let temp = [...selectedSkills];
            temp.splice(index, 1);
            setSkills([...temp])
        }
    }
    const borderColor = (skill:string)=> selectedSkills.includes(skill) ? Colors.primary : '#00000063';
    const backgroundColor = (skill:string)=> selectedSkills.includes(skill) ? '#EFF6FF' : 'transparent';
    const color = (skill:string)=> selectedSkills.includes(skill) ? Colors.primary : '#000000B2';
    return(
        <View>
            <ThemedText type="title" style={{marginTop:10}}>Job Preferences</ThemedText>
            <LabelInput label="Preferred Role" placeholder="Frontend Developer"/>
            <LabelInput label="Experience Level" placeholder="Entry-Level"/>
            <View style={stepsSheet.typeView}>
                <ThemedText color="#000000B2">Job Type</ThemedText>
                <View style={stepsSheet.skillsView}>
                    {
                        type.map((skill, index)=>(
                            <TouchableOpacity 
                                style={[stepsSheet.skillView, {borderColor: borderColor(skill), backgroundColor:backgroundColor(skill)}]} 
                                key={index}
                                onPress={()=>handleSkill(skill)}
                            >
                                <ThemedText size={11} color={color(skill)}>{skill}</ThemedText>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
            <View style={stepsSheet.typeView}>
                <ThemedText color="#000000B2">Work mode</ThemedText>
                <View style={stepsSheet.skillsView}>
                    {
                        mode.map((skill, index)=>(
                            <TouchableOpacity 
                                style={[stepsSheet.skillView, {borderColor: borderColor(skill), backgroundColor:backgroundColor(skill)}]} 
                                key={index}
                                onPress={()=>handleSkill(skill)}
                            >
                                <ThemedText size={11} color={color(skill)}>{skill}</ThemedText>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}



const stepsSheet = StyleSheet.create({
    skillsView:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    skillView:{
        paddingVertical:2,
        paddingHorizontal:8,
        borderWidth:1,
        margin:5,
        borderRadius: 16
    },
    typeView:{
        marginVertical:10
    }
});