import { View, StyleSheet, Text } from 'react-native';

export default function SizeButton() {
 return (
   <View style={styles.container}>
    <Text style={styles.text}>
        40
    </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "#e6e6e6",
        borderWidth: 3,
        marginHorizontal: 10,
    }, 
    text:{
        color: "#FFF",
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center"
    }
})