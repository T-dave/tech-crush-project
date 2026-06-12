import Ionicons from "@expo/vector-icons/Ionicons";
import { View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";
import applicationSheet from "@/styles/applicationSheet";
import { applyFlowStyles } from "@/styles/applyFlowStyles";
import { Colors } from "@/constants/theme";

type IoniconsIconName = keyof typeof Ionicons.glyphMap;
interface DetailProps extends ViewProps{
    label: string;
    info: string;
    icon: IoniconsIconName;
}
export default function Detail({label, info, icon, style}:DetailProps){
    return(
        <View style={[applicationSheet.detailView, style]}>
            <View style={applicationSheet.detailLeft}>
                <Ionicons name={icon} size={16} color={Colors.primary} style={{marginRight:20}}/>
                <View>
                    <ThemedText size={14}>{label}</ThemedText>
                    <ThemedText>{info}</ThemedText>
                </View>
            </View>
            <Ionicons size={18} name="pencil-outline" color={Colors.primary}/>
        </View>
    )
}