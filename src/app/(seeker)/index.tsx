import Banner from "@/components/banner";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import { HelloWave } from "@/components/hello-wave";
import Card from "@/components/home-card";
import Input from "@/components/text-input";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import homeSheet from "@/styles/homeSheet";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Image, ScrollView, TextInput, TouchableOpacity, View } from "react-native";


export default function Home(){
    return(
        <Container edges={['top']}>
            <View style={homeSheet.top}>
                <View>
                    <ThemedText type="subtitle" color="#000000BF">Good Morning</ThemedText>
                    <View style={{flexDirection:'row', alignItems:'center', paddingTop:5}}>
                        <ThemedText size={18} color="#000000BF">Tunde </ThemedText>
                        <HelloWave />
                    </View>
                </View>
                <View style={homeSheet.topRight}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    <Image style={homeSheet.profilePic} source={{uri:'https://scontent.fiba2-1.fna.fbcdn.net/v/t39.30808-1/320799673_5810517019035680_8329422440832000911_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s200x200&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHeA03W1fI6tY8HlDk3Blhpv4WBxte9VK2_hYHG171UrRUQ5hjdcEkqIKQrKlZuZtmXyVj8hKYOWw2Y2SQbYYmq&_nc_ohc=eNPYM0Fh1KsQ7kNvwGb7L4M&_nc_oc=AdpMHFJs_a8kvcLSPRu8BnPku0KQx4EOHNjkEZ8E_9D0XK4mP5bE5HKPGXDG5PtuzK8&_nc_zt=24&_nc_ht=scontent.fiba2-1.fna&_nc_gid=SPQ2FbTxfl2z2a6j2v_enA&_nc_ss=7a2a8&oh=00_Af_KSkzmUmHJQMNlj8DRF5-Upkkq0t20OYUvU5TP2c8bjA&oe=6A2CB69B'}}/>
                </View>
            </View>
        
            <View style = {[homeSheet.row, {gap:8, paddingHorizontal:20, paddingVertical:10}]}>
                <View style={homeSheet.searchView}>
                    <Ionicons name="search" size={18} color="#686868" style={{padding:16, paddingRight:6}}/>
                    <TextInput style={homeSheet.input} placeholder="Search jobs, companies..." placeholderTextColor={'#5E5F61'}/>
                </View>
                <Image style={homeSheet.filter} source={require('../../../assets/images/filter.png')}/>
            </View>

            <ScrollView horizontal contentContainerStyle={homeSheet.bannerView} showsHorizontalScrollIndicator={false} style={{flexGrow:0}}>
                <Banner title="Product Design Intern" location="Paystack • Lagos" type="Internship" job="design" style={{marginLeft:20}}/>
                <Banner title="Frontend Developer" location="Flutterwave • Remote" type="Remote" job="dev" style={{marginRight:20}}/>
            </ScrollView>

            <View style={{padding:20}}>
                <View style={[homeSheet.row, {justifyContent:'space-between'}]}>
                    <ThemedText size={18}>Verified for you</ThemedText>
                    <ThemedText type="small" color={Colors.primary}>See all</ThemedText>
                </View>
                <TouchableOpacity onPress={()=>router.navigate('/application')}>
                    <Card
                        position="UI/UX Design Intern"
                        company="TechCorp Intl"
                        location="Lagos"
                        tags={["Internship", "Remote", "New"]}
                        salary="N250k"
                        time="2 days"
                        image={require('../../../assets/images/techCorp.png')}                 
                    />
                </TouchableOpacity>
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
    )
}