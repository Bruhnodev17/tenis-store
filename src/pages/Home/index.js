import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Shoes from "../../components/Shoes";

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

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>
        
        <View style={{flexDirection: "row", justifyContent: "space-around", margin:20}}>

            <Shoes img={require("../../assets/1.png")} cost="R$140,00">
              Nike Air Max 90
            </Shoes>

            <Shoes img={require("../../assets/2.png")} cost="R$280,00">
              Nike Downshifter 10
            </Shoes>
       </View>

       <View style={{flexDirection: "row", justifyContent: "space-around", margin:20}}>


            <Shoes img={require("../../assets/3.png")} cost="R$560,90">
              Nike Squidward Tentacles
            </Shoes>

            <Shoes img={require("../../assets/4.png")} cost="R$220,00">
              Nike Epic React Flyknit 2
            </Shoes>
       </View>

       <View style={{flexDirection: "row", justifyContent: "space-around", margin:20}}>

            <Shoes img={require("../../assets/5.png")} cost="R$920,90">
              Nike Squidward Tentacles
            </Shoes>

            <Shoes img={require("../../assets/6.png")} cost="R$220,00">
              Nike Epic React Flyknit 2
            </Shoes>
       </View>

      </ScrollView>

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
  },
  
});
