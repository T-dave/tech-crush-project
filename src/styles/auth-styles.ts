import { Colors } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
    launchpadView:{
        padding:5,
        paddingHorizontal:8,
        backgroundColor:Colors.primary,
        alignSelf:'flex-start',
        borderRadius:30
    },
    typeView:{
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:"#00000033",
        borderRadius:12
    },
    type:{
        flex:1,
        margin:5
    },
});