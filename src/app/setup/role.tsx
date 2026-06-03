import {Top2} from "@/components/auth-top";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import Role from "@/components/role-card";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";



export default function Reset(){
    const [ type, setType ] = useState('seeker')
    return(
        <Container style={{padding:20, justifyContent:'space-between'}}>
            <View>
                <Top2 title="Choose your role" subtitle="This helps us personalize your LaunchPad experience ."/>
                <Role
                    title="Job Seeker"
                    role="Find internships and entry-level jobs."
                    image={require('../../../assets/images/seeker.png')}
                    clicked = {type === 'seeker'}
                    handleClick={()=>setType('seeker')}
                />
                <Role
                    title="Employer"
                    role="Post jobs and hire verified talent."
                    image={require('../../../assets/images/employer.png')}
                    clicked = {type === 'employer'}
                    handleClick={()=>setType('employer')}
                />
            </View>
            <Button title="Continue" onPress={()=>router.navigate('/setup/profile')}/>
        </Container>
    )
}