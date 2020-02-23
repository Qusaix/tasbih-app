import React from'react';
import {Text,View,TouchableOpacity,StyleSheet,ImageBackground} from"react-native";
import { Header } from "../compnents/Header";
import { Navigation } from "react-native-navigation";



class Main extends React.Component
{
   constructor()
   {
      super()
      this.state = {
         tasbih:0,
      };
   }

   count_tasbih = ()=>{
      return this.setState({'tasbih':this.state.tasbih+1}) 
   }

   show_drawer = ()=>{

   }
 

   render()
   {
      return(

         <ImageBackground source={require("../assets/background.jpg")} style={style.container}>
            {/* <Header /> */}

           <View style={style.main_contaner}>

                  {/* <Text style={style.app_name}>تسبيح </Text> */}

                  <Text style={style.count_tasbih_style}>{this.state.tasbih}</Text>


                  <TouchableOpacity onPress={this.count_tasbih} style={style.tasbih_button}>


                  </TouchableOpacity>



           </View>

         </ImageBackground >
    
        
      )
   }
}

export default Main;

const style = StyleSheet.create({

   main_contaner:{
      justifyContent:"center",
   },
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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