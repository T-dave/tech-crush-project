import homeSheet from "@/styles/homeSheet";
import { Image, View, ViewProps } from "react-native";
import Button from "./button";
import { ThemedText } from "./themed-text";

interface BannerProps extends ViewProps{
    title:string;
    location:string;
    type:string;
    job:string;
}
export default function Banner({title, location, type, job, style}:BannerProps) {
  return (
    <View style={[homeSheet.banner, style]}>
      <View style={homeSheet.bannerIconView}>
        <Image
          style={{ width: 27, height: 27 }}
          source={job === 'design' ? require('../../assets/images/design.png') : require('../../assets/images/dev.png')}
          resizeMode="contain"
        />
      </View>
      <View>
        <ThemedText color="#FFF" size={22}>
          {title}
        </ThemedText>
        <ThemedText color="#FFF" size={14}>
          {location}
        </ThemedText>
        <View style={homeSheet.typeView}>
          <ThemedText size={11} color="#FFF">
            {type}
          </ThemedText>
        </View>
      </View>
      <Button
        buttonColor="#FFF"
        onPress={() => console.log("Hii")}
        title="Apply now"
        textColor="#000"
        style={{ height: 40 }}
        textSize={12}
      />
    </View>
  );
}
