import Container from "@/components/custom-container";
import Card from "@/components/listing-card";
import Option from "@/components/option";
import Paging from "@/components/paging";
import Input from "@/components/text-input";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import listingSheet from "@/styles/listingSheet";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function Listing(){ 
    const [ type, setType ] = useState('none');
    const [ location, setLocation ] = useState('none');
    return(
        <Container style={{paddingHorizontal:20}}>
            <View style={listingSheet.top}>
                <ThemedText>Post a Job</ThemedText>
                <TouchableOpacity>
                    <ThemedText>Save Draft</ThemedText>
                </TouchableOpacity>
            </View>
            <Paging/>
            <Card title="BASIC INFORMATION" style={{marginVertical:20}}>
                <View style={{marginVertical:50}}>
                    <Input placeholder="'UI/UX' designer" color={Colors.primary}/>
                </View>
                <View style={listingSheet.options}>
                    <Option title="Internship" clicked={type === 'internship'} handleClick={()=>setType('internship')} style={{width:'45%'}}/>
                    <Option title="Freelance" clicked={type === 'freelance'} handleClick={()=>setType('freelance')} style={{width:'45%'}}/>
                    <Option title="Full-time" clicked={type === 'full-time'} handleClick={()=>setType('full-time')} style={{width:'45%'}}/>
                    <Option title="Contract" clicked={type === 'contract'} handleClick={()=>setType('contract')} style={{width:'45%'}}/>
                </View>
            </Card>
            <Card title="LOCATION & WORK MODE" style={{marginVertical:20}}>
                <View style={listingSheet.locations}>
                    <Option title="Remote" clicked={location === 'remote'} handleClick={()=>setLocation('remote')}/>
                    <Option title="Onsite" clicked={location === 'onsite'} handleClick={()=>setLocation('onsite')}/>
                    <Option title="Hybrid" clicked={location === 'hybrid'} handleClick={()=>setLocation('hybrid')}/>
                </View>
            </Card>
        </Container>
    )
}