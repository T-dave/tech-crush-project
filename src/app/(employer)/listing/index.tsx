import Button from "@/components/button";
import Container from "@/components/custom-container";
import LabelInput from "@/components/label-input";
import { Details, Preview, Requirements } from "@/components/listing";
import Card from "@/components/listing-card";
import Option from "@/components/option";
import Paging from "@/components/paging";
import Input from "@/components/text-input";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import listingSheet from "@/styles/listingSheet";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function ListingScreen(){ 
    const [ page, setPage ] = useState(1);
    return(
        <Container style={{paddingHorizontal:20}} edges={["top"]}>
            <View style={listingSheet.top}>
                <ThemedText>Post a Job</ThemedText>
                <TouchableOpacity>
                    <ThemedText>Save Draft</ThemedText>
                </TouchableOpacity>
            </View>
            <Paging page={page} pages={["Details", "Requirements", "Preview"]}/>
            {
                page === 1 ?
                <View>
                    <Details/>
                    <Button title="Continue >" onPress={()=>setPage(page + 1)}/>
                </View>
                :
                page === 2 ?
                <View>
                    <Requirements/>
                    <View style={{flexDirection:'row'}}>
                        <Button title="< Back" onPress={()=>setPage(page - 1)} style={{paddingHorizontal:10, marginRight:10}} buttonColor="#000"/>
                        <Button title="Continue >" onPress={()=>setPage(page + 1)} style={{flex:1}}/>
                    </View>
                </View>
                :
                <View>
                    <Preview/>
                    <View style={{flexDirection:'row'}}>
                        <Button title="< Back" onPress={()=>setPage(page - 1)} style={{paddingHorizontal:10, marginRight:10}} buttonColor="#000"/>
                        <Button title="Publish Listing >" onPress={()=>setPage(page + 1)} style={{flex:1}}/>
                    </View>
                </View>
            }
        </Container>
    )
}