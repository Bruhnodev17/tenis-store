import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>●</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>MASCULINO</Text>

          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <Ionicons name="list-sharp" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  text: {
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: " 1%",
  },
  line:{
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2
  }
});
