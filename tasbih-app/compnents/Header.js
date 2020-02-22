import React from "react";
import {View,Text,StyleSheet} from "react-native";


const Header = (p)=>{
    return (
        <View style={style.header}>
            <Text style={style.app_name}>Tasbih</Text>
        </View>
    );
}

const style = StyleSheet.create({
    header:{
        backgroundColor:"black",
        height:50,
        width:100+"%",
        justifyContent:"center",
        marginTop:-7,

    },
    app_name:{
        alignSelf:"center",
        color:"white",
        fontSize:25,
        
    }
});

export {Header} ;