import React from'react';
import {Text,View,TouchableOpacity,StyleSheet,ImageBackground} from"react-native";
import { Navigation } from "react-native-navigation";
import {Ionicons , AntDesign} from "@expo/vector-icons";


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
      return this.setState({'tasbih':this.state.tasbih+1});
   };

   minus_count = ()=>{
      if(this.state.tasbih === 0)
      {
         return this.setState({'tasbih':this.state.tasbih = 0})
      }
      return this.setState({'tasbish':this.state.tasbih = this.state.tasbih-1});
   };

   reset_count = () =>{
      return this.setState({'tasbish':this.state.tasbih = 0});
   }

   render()
   {
      return(

         <ImageBackground source={require("../assets/background.jpg")} style={style.container}>
            {/* <Header /> */}
            <Text style={style.count_tasbih_style}>{this.state.tasbih}</Text>

           <View style={style.main_contaner}>

                  {/* <Text style={style.app_name}>تسبيح </Text> */}



               {/*Main Button */}
                  <TouchableOpacity onPress={this.minus_count} style={style.other_buttons}><AntDesign name="minus" size={32} color="white" /></TouchableOpacity>
               {/*Reset Button*/} 
               <TouchableOpacity onPress={this.count_tasbih} style={style.tasbih_button}></TouchableOpacity>
               {/*Minus Button*/}
               <TouchableOpacity onPress={this.reset_count} style={style.other_buttons}><AntDesign name="reload1" size={32} color="white" /></TouchableOpacity>





           </View>

         </ImageBackground >
    
        
      )
   }
}

export default Main;

const style = StyleSheet.create({

   main_contaner:{
      justifyContent:"center",
      flexDirection:"row",
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
      padding:50,
      backgroundColor:'#a68b56',
      borderRadius:50,
      marginTop:60+"%",


   },
   count_tasbih_style:{
      fontSize:100,
      alignSelf:"center",
      color:"white",

   },
   other_buttons:{
      padding:15,
     // backgroundColor:'#a68b56',
      borderRadius:15,
      marginTop:60+"%",
      margin:10,
      justifyContent:"center",
   }

})

export { Main };