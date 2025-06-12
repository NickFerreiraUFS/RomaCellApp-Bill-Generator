import { View, Text, StyleSheet} from "react-native";
import { Button } from "../components/button";
import {router} from "expo-router"

export default function Index(){
    function navigation(){
        router.navigate("/message")
    }
    
    return( 
        <View style= {styles.container}>
            <Text style = {styles.title}>Bem vindo ao </Text>
            <Text style = {styles.titlePrin}>Roma Cell Recibos</Text>
            <Button style={styles.buttonContainer} onPress={navigation} title="Fazer recibo"></Button>
        </View>
    )
}

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:"black"
    },

    buttonContainer: {
        marginTop:25,
        width: "50%",
        height: 52,
        backgroundColor: "orange",
        borderRadius:10,
        borderWidth:2,
        justifyContent: "center",
        alignItems: "center",
    },

    title:{
        color:"yellow",
        fontSize: 25,
        fontWeight: "bold"
    },

    titlePrin:{
        color:"yellow",
        fontSize: 45,
        fontWeight: "bold"
    }
})