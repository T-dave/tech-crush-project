import { Colors } from "@/constants/theme";
import listingSheet from "@/styles/listingSheet";
import { useState } from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import LabelInput from "./label-input";
import Card from "./listing-card";
import Option from "./option";
import Input from "./text-input";
import { ThemedText } from "./themed-text";
import  JobCard from "./job-listing";

export function Details() {
  const [type, setType] = useState("none");
  const [location, setLocation] = useState("none");
  const [toggle, setToggle] = useState(false);
  const backgroundColor = toggle ? "#22C55E" : "#8A8A8ABF";
  const justifyContent = toggle ? "flex-end" : "flex-start";
  return (
    <View>
      <Card title="BASIC INFORMATION" style={{ marginVertical: 20 }}>
        <View style={{ marginVertical: 50 }}>
          <Input placeholder="'UI/UX' designer" color={Colors.primary} />
        </View>
        <View style={listingSheet.options}>
          <Option
            title="Internship"
            clicked={type === "internship"}
            handleClick={() => setType("internship")}
            style={{ width: "45%" }}
          />
          <Option
            title="Freelance"
            clicked={type === "freelance"}
            handleClick={() => setType("freelance")}
            style={{ width: "45%" }}
          />
          <Option
            title="Full-time"
            clicked={type === "full-time"}
            handleClick={() => setType("full-time")}
            style={{ width: "45%" }}
          />
          <Option
            title="Contract"
            clicked={type === "contract"}
            handleClick={() => setType("contract")}
            style={{ width: "45%" }}
          />
        </View>
      </Card>
      <Card title="LOCATION & WORK MODE" style={{ marginVertical: 20 }}>
        <View style={listingSheet.locations}>
          <Option
            title="Remote"
            clicked={location === "remote"}
            handleClick={() => setLocation("remote")}
          />
          <Option
            title="Onsite"
            clicked={location === "onsite"}
            handleClick={() => setLocation("onsite")}
          />
          <Option
            title="Hybrid"
            clicked={location === "hybrid"}
            handleClick={() => setLocation("hybrid")}
          />
        </View>
        <View style={listingSheet.beginerFriendly}>
          <ThemedText color={Colors.primary}>Beginer Friendly</ThemedText>
          <TouchableOpacity
            style={[listingSheet.toggle, { backgroundColor, justifyContent }]}
            onPress={() => setToggle(!toggle)}
          >
            <View style={listingSheet.toggleCircle} />
          </TouchableOpacity>
        </View>
        <LabelInput label="Location" placeholder="Lagos, Nigeria" />
      </Card>
      <Card title="COMPENSATION" style={{ marginVertical: 20 }}>
        <TextInput>Monthly Stipend</TextInput>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Input placeholder="Low end" />
          <Input placeholder="High end" />
        </View>
        <LabelInput
          label="Application Deadline"
          placeholder="Lagos, Nigeria"
          style={{ marginTop: 20 }}
        />
      </Card>
    </View>
  );
}

export function Requirements() {
  const [type, setType] = useState("none");
  const [location, setLocation] = useState("none");
  const [cover, setCover] = useState(false);
  const [portfolio, setPortfolio] = useState(true);
  return (
    <View>
      <Card title="JOB DESCRIPTION" style={{ marginVertical: 20 }}>
        <View style={{ marginVertical: 20 }}>
          <TextInput
            placeholder="Enter descrription"
            multiline
            style={listingSheet.input}
          />
        </View>
      </Card>
      <Card title="SKILLS REQUIRED" style={{ marginVertical: 20 }}>
        <View style={{ marginVertical: 20 }}>
          <ThemedText color={Colors.primary} size={14} weight={500}>Add relevant skills</ThemedText>
          <View style={styles.skills}>
            <View
              style={styles.type}
            >
              <ThemedText size={14} weight={500} color={Colors.primary}>
                Wireframing
              </ThemedText>
              <ThemedText style={{marginLeft:10}} weight={500} color={Colors.primary}>
                x
              </ThemedText>
            </View>
            <View
              style={styles.type}
            >
              <ThemedText size={14} weight={500} color={Colors.primary}>
                UI/UX Design
              </ThemedText>
              <ThemedText style={{marginLeft:10}} weight={500} color={Colors.primary}>
                x
              </ThemedText>
            </View>
            <View
              style={styles.type}
            >
              <ThemedText size={14} weight={500} color={Colors.primary}>
                Figma
              </ThemedText>
              <ThemedText style={{marginLeft:10}} weight={500} color={Colors.primary}>
                x
              </ThemedText>
            </View>
          </View>
          <Image source={require('../../assets/images/search.png')} style={{width:'100%', height:40}}/>
          <View style={{marginVertical:10}}>
            <ThemedText color={Colors.primary}>Experience Level</ThemedText>
            <View style={listingSheet.options}>
              <Option
                title="Internship"
                clicked={type === "internship"}
                handleClick={() => setType("internship")}
                style={{ width: "45%" }}
              />
              <Option
                title="Freelance"
                clicked={type === "freelance"}
                handleClick={() => setType("freelance")}
                style={{ width: "45%" }}
              />
              <Option
                title="Full-time"
                clicked={type === "full-time"}
                handleClick={() => setType("full-time")}
                style={{ width: "45%" }}
              />
              <Option
                title="Contract"
                clicked={type === "contract"}
                handleClick={() => setType("contract")}
                style={{ width: "45%" }}
              />
            </View>
          </View>
        </View>
      </Card>
      <Image source={require('../../assets/images/requirements.png')} style={{width:"100%", height:257}} resizeMode="contain"/>
      <Card title="APPLICATION SETTING" style={{marginVertical:10}}>
        <View style={listingSheet.beginerFriendly}>
          <ThemedText color={Colors.primary}>Require Cover Letter</ThemedText>
          <TouchableOpacity
            style={[listingSheet.toggle, { backgroundColor:cover ? "#22C55E" : "#8A8A8ABF", justifyContent:cover ? "flex-end" : "flex-start" }]}
            onPress={() => setCover(!cover)}
          >
            <View style={listingSheet.toggleCircle} />
          </TouchableOpacity>
        </View>
        <View style={listingSheet.beginerFriendly}>
          <ThemedText color={Colors.primary}>Require Portfolio Link</ThemedText>
          <TouchableOpacity
            style={[listingSheet.toggle, { backgroundColor:portfolio ? "#22C55E" : "#8A8A8ABF", justifyContent:portfolio ? "flex-end" : "flex-start" }]}
            onPress={() => setPortfolio(!portfolio)}
          >
            <View style={listingSheet.toggleCircle} />
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
}

export function Preview(){
  return(
    <View>
      <View style={[listingSheet.card, {flexDirection:'row', marginVertical:10}]}>
        <Image source={require('../../assets/images/clip.png')} style={{width:19, height:21}}/>
        <View style={{paddingHorizontal:10}}>
        <ThemedText color={Colors.primary}><ThemedText weight={600} color={Colors.primary}>Almost there.</ThemedText> Review your listing before it goes live. All jobs are reviewed by our team within 24 hours before appearing to job seekers.</ThemedText>
        </View>
      </View>

      <View style={{marginVertical:20}}>
        <ThemedText color={Colors.primary}>HOW JOB SEEKERS WILL SEE THIS</ThemedText>
        <JobCard/>
      </View>
      <Image source={require('../../assets/images/keyRequirements.png')} style={{width:"100%", height:342}} resizeMode="contain"/>
    </View>    
  )
}

const styles = StyleSheet.create({
  type:{
        borderWidth:0.5,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:32,
        alignSelf:'flex-start',
        marginRight:10,
        marginVertical:5,
        flexDirection:'row',
        borderColor: "#8A8A8ABF",
        backgroundColor: "#8A8A8A33"
    },
    skills:{
      flexDirection:'row',
      flexWrap:'wrap'
    }
});
