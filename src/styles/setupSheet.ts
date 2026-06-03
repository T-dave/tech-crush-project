import { Colors } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");
const setupSheet = StyleSheet.create({
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    width: width / 3,
    height: 5,
    backgroundColor: "#E2E8F0",
    borderRadius:16,
    marginRight:8
  },
  progress: {
    height: "100%",
    backgroundColor: Colors.primary,
    borderRadius:16
  },
  progressView:{
    flexDirection:'row',
    alignItems:'flex-end',
    marginVertical:5
  }
});

export default setupSheet;
