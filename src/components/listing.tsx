import { Colors } from "@/constants/theme";
import listingSheet from "@/styles/listingSheet";
import { View, TouchableOpacity, TextInput } from "react-native";
import LabelInput from "./label-input";
import Card from "./listing-card";
import Input from "./text-input";
import { ThemedText } from "./themed-text";
import Option from "./option";
import { useState } from "react";

export function Details() {
    const [ type, setType ] = useState('none');
    const [ location, setLocation ] = useState('none');
    const [ toggle, setToggle ] = useState(false);
    const backgroundColor = toggle ? "#22C55E" : "#8A8A8ABF";
    const justifyContent = toggle ? "flex-end" : "flex-start"
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
    const [ type, setType ] = useState('none');
    const [ location, setLocation ] = useState('none');
    const [ toggle, setToggle ] = useState(false);
    const backgroundColor = toggle ? "#22C55E" : "#8A8A8ABF";
    const justifyContent = toggle ? "flex-end" : "flex-start"
  return (
    <View>
      <Card title="JOB DESCRIPTION" style={{ marginVertical: 20 }}>
        <View style={{marginVertical:20}}>
            <Input placeholder="Enter descrription" multiline/>
        </View>
      </Card>
      <Card title="SKILLS REQUIRED" style={{ marginVertical: 20 }}>
        <View style={{marginVertical:20}}>
            <Input placeholder="Enter descrription" multiline/>
        </View>
      </Card>
    </View>
  );
}
