import { Details, Resume } from "@/components/application";
import Card from "@/components/application-card";
import Detail from "@/components/application-detail";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import Paging from "@/components/paging";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import applicationSheet from "@/styles/applicationSheet";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function Application() {
  const [page, setPage] = useState(1);
  return (
    <Container style={{paddingHorizontal:20}}>
      <Paging page={page} pages={["Details", "Resume", "Submit"]} />
      {
        page === 1 ?
        <View>
            <Details/>
            <Button onPress={()=>setPage(page + 1)} title={"Contininue to Resume"}/>
        </View>
        :
        page === 2 ?
        <View>
            <Resume/>
            <View style={applicationSheet.buttons}>
                <TouchableOpacity style={[applicationSheet.browseButton, {marginTop:0, marginRight:15}]}>
                    <ThemedText size={14}>Browse Files</ThemedText>
                </TouchableOpacity>
                <Button onPress={()=>router.navigate('/application/sent')} title={"SUBMIT APPLICATION"} style={{flex:1}}/>
            </View>
        </View>
        :
        <></>
      }
      <ThemedText type="small" color={Colors.primary} style={{textAlign:'center', marginVertical:8}}>Step {page} of 3</ThemedText>
    </Container>
  );
}
