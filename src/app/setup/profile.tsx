import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import setupSheet from "@/styles/setupSheet";
import { useState } from "react";
import { View } from "react-native";
import { Cv, PersonalInfo, Preferences, Skills } from "../../components/steps";
import { router } from "expo-router";

export default function Reset() {
  const [page, setPage] = useState(1);
  const handleNext = ()=>{
    if(page === 4){
        router.navigate('/listing')
    }else{
        setPage(page + 1)
    }
  }
  return (
    <Container style={{ padding: 20, justifyContent: "space-between" }}>
        
      <View>
        <View>
          <ThemedText type="title">Set up your profile</ThemedText>
          <View style={setupSheet.progressView}>
            <View style={setupSheet.line}>
              <View
                style={[setupSheet.progress, { width: `${(100 / 4) * page}%` }]}
              />
            </View>
            <ThemedText
              style={{ lineHeight: 16, color: "#95A2B5", fontSize: 14 }}
            >
              Step {page} out of 4
            </ThemedText>
          </View>
        </View>
        {page === 1 ? <Cv /> : page === 2 ? <PersonalInfo /> : page === 3 ? <Skills /> : page === 4 ? <Preferences /> : <></>}
      </View>
      <Button title={page === 4 ? "Finish Setup" : "Continue"} onPress={handleNext} />
    </Container>
  );
}
