import Container from "@/components/custom-container";
import Card from "@/components/job-listing";
import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export default function Listing(){
    return(
        <Container style={{paddingHorizontal:20}} edges={['top']}>
            <View style={styles.top}>
                <ThemedText type="subtitle">Job Listing</ThemedText>
                <Ionicons name="notifications-outline" size={20}/>
            </View>
            <View style={{marginTop:30}}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    top:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
});