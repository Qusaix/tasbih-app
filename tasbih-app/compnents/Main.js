import React from'react';
import {Text,View,TouchableOpacity,StyleSheet} from"react-native";


const Main = (p) => {

 return (

    <View style={style.main_contaner}>

        {/* <Text style={style.app_name}>تسبيح </Text> */}

        <Text style={style.count_tasbih_style}>{p.tasbih}</Text>


        <TouchableOpacity onPress={p.count_tasbih} style={style.tasbih_button}>

   
        </TouchableOpacity>



    </View>
 );
 
}

const style = StyleSheet.create({

   main_contaner:{
      justifyContent:"center",
   },

   app_name:{

      fontSize:40,
      alignSelf:"center",
      color:"white",

   },
   
   tasbih_button:{
      padding:150,
      backgroundColor:'green',
      borderRadius:150,


   },
   count_tasbih_style:{
      fontSize:100,
      alignSelf:"center",
      color:"white",

   }

})

export { Main };