import { View, Text, StyleSheet } from 'react-native';
import Shoes from "../Shoes"
import { ScrollView } from 'react-native-gesture-handler';

export default function Footer() {
 return (
   <View>
        <Text style={styles.title}>VOCCÊ TAMBÉM PODE GOSTAR</Text>
        <View style={{flexDirection: "row"}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginHorizontal:10}}>
                    <Shoes img={require("../../assets/1.png")} cost="140,00">
                        Nike Air Max 90
                    </Shoes>
                </View>
            </ScrollView>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({

})