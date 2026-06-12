import Container from "@/components/custom-container";
import Card from "@/components/home-card";
import Type from "@/components/job-type";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import homeSheet from "@/styles/homeSheet";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Image, TextInput, View } from "react-native";

export default function Search() {
  const [ type, setType ] = useState(0)
  return (
    <Container edges={['top']}>
      <View
        style={[
          homeSheet.row,
          { gap: 8, paddingHorizontal: 20, paddingVertical: 10 },
        ]}
      >
        <View style={homeSheet.searchView}>
          <Ionicons
            name="search"
            size={18}
            color="#686868"
            style={{ padding: 16, paddingRight: 6 }}
          />
          <TextInput
            style={homeSheet.input}
            placeholder="Search jobs, companies..."
            placeholderTextColor={"#5E5F61"}
          />
        </View>
        <Image
          style={homeSheet.filter}
          source={require("../../../assets/images/filter.png")}
        />
      </View>
      <View style={{flexDirection:'row', paddingHorizontal:20}}>
        <Type title="Internship" onPress={()=>setType(1)} clicked={type === 1}/>
        <Type title="Remote" onPress={()=>setType(2)} clicked={type === 2}/>
        <Type title="Hybrid" onPress={()=>setType(3)} clicked={type === 3}/>
      </View>
      <View style={{padding:20}}>
                <View style={[homeSheet.row, {justifyContent:'space-between'}]}>
                    <ThemedText size={18}>18 Results</ThemedText>
                    <Image style={{width:115, height:34}} source={require('../../../assets/images/relevant.png')}/>
                </View>
                <Card
                    position="UI/UX Design Intern"
                    company="TechCorp Intl"
                    location="Lagos"
                    tags={["Internship", "Remote", "New"]}
                    salary="N250k"
                    time="2 days"
                    image={require('../../../assets/images/techCorp.png')}                 
                />
                <Card
                    position="UI/UX Design Intern"
                    company="TechCorp Intl"
                    location="Lagos"
                    tags={["Internship", "Remote", "New"]}
                    salary="N250k"
                    time="2 days"
                    image={require('../../../assets/images/techCorp.png')}                 
                />
                <Card
                    position="UI/UX Design Intern"
                    company="TechCorp Intl"
                    location="Lagos"
                    tags={["Internship", "Remote", "New"]}
                    salary="N250k"
                    time="2 days"
                    image={require('../../../assets/images/techCorp.png')}                 
                />
                <Card
                    position="UI/UX Design Intern"
                    company="TechCorp Intl"
                    location="Lagos"
                    tags={["Internship", "Remote", "New"]}
                    salary="N250k"
                    time="2 days"
                    image={require('../../../assets/images/techCorp.png')}                 
                />
                <Card
                    position="UI/UX Design Intern"
                    company="TechCorp Intl"
                    location="Lagos"
                    tags={["Internship", "Remote", "New"]}
                    salary="N250k"
                    time="2 days"
                    image={require('../../../assets/images/techCorp.png')}                 
                />
                <Card
                    position="UI/UX Design Intern"
                    company="TechCorp Intl"
                    location="Lagos"
                    tags={["Internship", "Remote", "New"]}
                    salary="N250k"
                    time="2 days"
                    image={require('../../../assets/images/techCorp.png')}                 
                />
            </View>
    </Container>
  );
}
