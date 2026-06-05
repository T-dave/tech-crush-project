
import { ThemedText } from "@/components/themed-text";
import listingSheet from "@/styles/listingSheet";
import { TouchableOpacity, View } from "react-native";

export default function Paging(){
    return(
        <View>
            <View style={listingSheet.paging}>
                <View style={listingSheet.pageView}>
                    <View style={[listingSheet.pageNum, {marginRight:10}]}>
                        <ThemedText color="#FFF">1</ThemedText>
                    </View>
                    <View style={listingSheet.line}/>
                </View>
                <View style={[listingSheet.pageNum, {marginHorizontal:10}]}>
                    <ThemedText>2</ThemedText>
                </View>
                <View style={listingSheet.pageView}>
                    <View style={listingSheet.line}/>
                     <View style={[listingSheet.pageNum, {marginLeft:10}]}>
                        <ThemedText>3</ThemedText>
                    </View>
                </View>
            </View>
            <View style={listingSheet.paging}>
                <ThemedText type="small">Details</ThemedText>
                <ThemedText type="small">Requirements</ThemedText>
                <ThemedText type="small">Preview</ThemedText>
            </View>
        </View>
    )
}