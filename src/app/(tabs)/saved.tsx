import Button from "@/components/button";
import Container from "@/components/custom-container";
import Card from "@/components/home-card";
import { ThemedText } from "@/components/themed-text";
import homeSheet from "@/styles/homeSheet";
import { Image, View } from "react-native";

export default function Saved() {
  return (
    <Container style={{paddingHorizontal:20}} edges={['top']}>
      <View style={[homeSheet.row, { justifyContent: "space-between", marginBottom:10 }]}>
        <ThemedText type="subtitle">Saved Jobs</ThemedText>
        <View style={homeSheet.row}>
          <Button onPress={() => console.log("hii")} title="Apply all" textSize={11} style={{padding:10}}/>
          <Image source={require("../../../assets/images/filter1.png")} style={{width:18, height:18, marginLeft:10}}/>
        </View>
      </View>
      <View style={homeSheet.stats}>
        <View style={homeSheet.stat}>
            <ThemedText size={22}>7</ThemedText>
            <ThemedText size={12}>Saved</ThemedText>
        </View>
        <View style={[homeSheet.stat, homeSheet.statMiddle]}>
            <ThemedText size={22}>2</ThemedText>
            <ThemedText size={12}>Expiring</ThemedText>
        </View>
        <View style={homeSheet.stat}>
            <ThemedText size={22}>3</ThemedText>
            <ThemedText size={12}>Applied</ThemedText>
        </View>
      </View>
      <View>
        <Card
          position="UI/UX Design Intern"
          company="TechCorp Intl"
          location="Lagos"
          tags={["Internship", "Remote", "New"]}
          salary="N250k"
          time="2 days"
          image={require("../../../assets/images/techCorp.png")}
        />
        <Card
          position="UI/UX Design Intern"
          company="TechCorp Intl"
          location="Lagos"
          tags={["Internship", "Remote", "New"]}
          salary="N250k"
          time="2 days"
          image={require("../../../assets/images/techCorp.png")}
        />
        <Card
          position="UI/UX Design Intern"
          company="TechCorp Intl"
          location="Lagos"
          tags={["Internship", "Remote", "New"]}
          salary="N250k"
          time="2 days"
          image={require("../../../assets/images/techCorp.png")}
        />
        <Card
          position="UI/UX Design Intern"
          company="TechCorp Intl"
          location="Lagos"
          tags={["Internship", "Remote", "New"]}
          salary="N250k"
          time="2 days"
          image={require("../../../assets/images/techCorp.png")}
        />
        <Card
          position="UI/UX Design Intern"
          company="TechCorp Intl"
          location="Lagos"
          tags={["Internship", "Remote", "New"]}
          salary="N250k"
          time="2 days"
          image={require("../../../assets/images/techCorp.png")}
        />
        <Card
          position="UI/UX Design Intern"
          company="TechCorp Intl"
          location="Lagos"
          tags={["Internship", "Remote", "New"]}
          salary="N250k"
          time="2 days"
          image={require("../../../assets/images/techCorp.png")}
        />
      </View>
    </Container>
  );
}
