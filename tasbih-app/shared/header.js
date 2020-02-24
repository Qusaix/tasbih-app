import React from "react";
import {Text,View,StyleSheet} from "react-native";
import {MaterialIcons}from "@expo/vector-icons";

export default function Header({navigation,tiltle}){
    const open_drawer = ()=>{
    return navigation.openDrawer();

    }
    return(
        <View style={style.header}>
            <MaterialIcons name="menu"  onPress={open_drawer} size={28}/>
            <View>

            <Text style={style.headerText}>{tiltle}</Text>
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",


    },
    headerText:{
        fontWeight:"bold",
        fontSize:20,
        color:"#333",
        letterSpacing:1,
    }
})
