
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import listingSheet from "@/styles/listingSheet";
import { TouchableOpacity, View } from "react-native";

interface PagingProps{
    page: number;
}
export default function Paging({page}:PagingProps){
    return(
        <View style={{marginVertical:10}}>
            <View style={listingSheet.paging}>
                <View style={listingSheet.pageView}>
                    <View style={[listingSheet.pageNum, {marginRight:10, backgroundColor:Colors.primary}]}>
                        <ThemedText color="#FFF">{page > 1 ? '✓' : 1}</ThemedText>
                    </View>
                    <View style={[listingSheet.line, {backgroundColor:page > 1 ? Colors.primary : '#00000040'}]}/>
                </View>
                <View style={[listingSheet.pageNum, {marginHorizontal:10, backgroundColor:page >= 2 ? Colors.primary : '#8A8A8A99'}]}>
                    <ThemedText color={page >= 2 ? '#FFF' : '#00000080'}>{page > 2 ? '✓' : 2}</ThemedText>
                </View>
                <View style={listingSheet.pageView}>
                    <View style={[listingSheet.line, {backgroundColor:page > 2 ? Colors.primary : '#00000040'}]}/>
                     <View style={[listingSheet.pageNum, {marginLeft:10, backgroundColor:page === 3 ? Colors.primary : '#8A8A8A99'}]}>
                        <ThemedText color={page === 3 ? '#FFF' : '#00000080'}>3</ThemedText>
                    </View>
                </View>
            </View>
            <View style={listingSheet.paging}>
                <ThemedText type="small" color={page >= 1 ? Colors.primary : '#00000080'}>Details</ThemedText>
                <ThemedText type="small" color={page >= 2 ? Colors.primary : '#00000080'}>Requirements</ThemedText>
                <ThemedText type="small" color={page === 3 ? Colors.primary : '#00000080'}>Preview</ThemedText>
            </View>
        </View>
    )
}