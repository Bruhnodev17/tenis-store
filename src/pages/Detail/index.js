import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Dot from "../../components/Dot";
import SizeButton from "../../components/SizeButton";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Nike Downshifter 10",
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/detail.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View>

        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$ 280,90</Text>
        </View>

        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>Nike Downshifter 10</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4"/>
          <Dot color="#fb6e53"/>
          <Dot color="#ddd"/>
          <Dot color="#000"/>
        </View>

        <View style={{flexDirection: "row", width: "100%"}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#FFF">42</SizeButton>
            <SizeButton>40</SizeButton>
            <SizeButton>38</SizeButton>
            <SizeButton>36</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Nike Downshifter 10
          </Text>

          <Text style={styles.textContent}>
            O Nike Downshifter 10 é um tênis esportivo acessível, com amortecimento leve e responsivo, ideal para corridas e atividades físicas diversas.
          </Text>

          <Text style={styles.textList}>
            - Categoria: Amortecimento
          </Text>

          <Text style={styles.textList}>
            - Material: Mesh
          </Text>

        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF"
  },
  image: {
    width: "100%"
  },
  title: {
    fontFamily: "Anton_400Regular",
    paddingHorizontal: "2%"
  },
  dotContainer:{
    flexDirection: "row",
    marginVertical: "7%"
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  textTitle:{
    fontSize: 22,
    lineHeight: 25,
    marginVertical: "2%"
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
    marginHorizontal: "3%",
  }
});
