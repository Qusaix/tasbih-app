import React from'react';
import {Text,View,TouchableOpacity,StyleSheet,ImageBackground,AsyncStorage,ProgressBarAndroid,Vibration , Alert,NativeModules} from"react-native";
import { Navigation } from "react-native-navigation";
import { AntDesign} from "@expo/vector-icons";
// import {Surface, Shape} from '@react-native-community/art';
// import * as Progress from 'react-native-progress';
import ProgressCircle from 'react-native-progress-circle'
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {
   AdMobBanner,
   AdMobInterstitial,
   PublisherBanner,
   AdMobRewarded
 } from 'expo-ads-admob';
 
const locale = NativeModules.I18nManager.localeIdentifier 

const en = {
    Day:'Day',
    Round:'Round'
}

const ar = {
    Day: 'اليوم' ,
    Round:"جوله" ,

}


 const Day = new Date();

class Main extends React.Component
{
   constructor()
   {
      super()
      this.state = {
         tasbih:0,
         round:0,
         roundNumber:0,
         zero:0

         
      };
   }

   count_tasbih = ()=>{

         // Adding The Tasbih Number
       this.setState({'tasbih':this.state.tasbih+1});

       // Adding the Round Count Number 
       this.setState({'round':this.state.round + 1});

      console.log(this.state.round)
        // Adding the Amount Of Rounds 
       if(this.state.round === 100)
       {
          // Reste The Round Number To Zero
         this.setState({'round':0});

         // Add Round Number 
         this.setState({'roundNumber':this.state.roundNumber+1});

         // Save The Round Number 
         AsyncStorage.setItem('RoundCount',this.state.roundNumber.toString());

         // Vibrate The Phone After The Round Added
         Vibration.vibrate(1000);
       }
       
       // Save The Tasbih Count 
       AsyncStorage.setItem('UserCount',this.state.tasbih.toString());

 

   };

   minus_count = ()=>{
      if(this.state.tasbih === 0)
      {
         this.setState({"round":this.state.round = 0})
         return this.setState({'tasbih':this.state.tasbih = 0})
      }
      
       this.setState({'tasbish':this.state.tasbih = this.state.tasbih-1});
       AsyncStorage.setItem('UserCount',this.state.tasbih.toString());
      if(this.state.round === 0)
      {
         return this.setState({"round":this.state.round = 0})
      }
      this.setState({"round":this.state.round - 1})


       return AsyncStorage.setItem('RounCounts',this.state.round.toString());

   };

   reset_count = () =>{
      this.setState({"round":this.state.round = 0})
       this.setState({'tasbish':this.state.tasbih = 0});
       return AsyncStorage.setItem('UserCount',this.state.tasbih.toString());
   }

   save_count = () =>{
       AsyncStorage.setItem('UserCount',this.state.tasbih.toString())
       .catch(err =>{
          console.warn(err);
       })
       AsyncStorage.clear();

   }

   UNSAFE_componentWillMount = async ()=>{

      //Know The Language 
      var lang_name = []; 

      for(var i=0;i<locale.length;i++)
      {
           if(i < 2 )
           {
               lang_name.push(locale[i]);
           }
      }
     let chosen_lang =  lang_name.join("")

      i18n.locale = chosen_lang;
      i18n.fallbacks = true;

      i18n.translations = {en,ar};
      //End

      // Get The User Data
     try{
      let count = await AsyncStorage.getItem("UserCount");
      let round = await AsyncStorage.getItem('RoundCount');
      let roundCount = await AsyncStorage.getItem('RounCounts');

      this.setState({'tasbih':parseInt(count)});
      this.setState({'roundNumber':parseInt(round)});
      this.setState({'round':parseInt(roundCount)});

      if(typeof parseInt(count) !== "number")
      {
         this.setState({'tasbih':0});

      }else if(typeof parseInt(round) !== "number")
      {
         this.setState({'roundNumber':0});

      }else if(typeof parseInt(roundCount) !== "number")
      {
         this.setState({'round':0})
      }

     }catch(err){
      Alert(err)
     }
   }

   // If There Is Any Error In ADMobile
   bannerError = (e)=>{
      console.warn(e)
   }

   render()
   { 

      return(

         <ImageBackground source={require("../assets/background.jpg")} style={style.container}>
            {/* <Header /> */}
            <Text style={style.count_tasbih_style}>{this.state.tasbih}</Text>

            <View style={style.ProgressBar}>
                  <ProgressCircle
                     percent={this.state.round}
                     radius={50}
                     borderWidth={15}
                     color="#a68b56"
                     shadowColor="#999"
                     bgColor="#fff"
                  >
                     <Text size={15}>{i18n.t('Round')}:</Text>
                    <Text style={{ fontSize: 18 }}>{this.state.roundNumber}</Text>
                  </ProgressCircle>
            </View>
            <View style={style.ProgressBar2}>
            <ProgressCircle
                     percent={100}
                     radius={50}
                     borderWidth={5}
                     color="#a68b56"
                     shadowColor="#999"
                     bgColor="#fff"
                  >
                     <Text size={15}>{i18n.t('Day')}:</Text>
                    <Text style={{ fontSize: 30 }}>{Day.getDate()}</Text>
                  </ProgressCircle>

            </View>
           <View style={style.main_contaner}>



               {/*Main Button */}
                  <TouchableOpacity onPress={this.minus_count} style={style.other_buttons}><AntDesign name="minus" size={32} color="white" /></TouchableOpacity>
                  
               {/*Reset Button*/} 
               <TouchableOpacity onPress={this.count_tasbih} style={style.tasbih_button}></TouchableOpacity>

               {/*Minus Button*/}
               <TouchableOpacity onPress={this.reset_count} style={style.other_buttons}><AntDesign name="reload1" size={32} color="white" /></TouchableOpacity>






           </View>
      {/* <AdMobBanner
       bannerSize="fullBanner"
       adUnitID="ca-app-pub-3940256099942544/6300978111"
       testDeviceID="EMULATOR"
       servePersonalizedAds // true or false
       onDidFailToReceiveAdWithError={(e) => this.bannerError(e)}
        /> */}
     

         </ImageBackground >
    
        
      )
   }
}

export default Main;

const style = StyleSheet.create({

   main_contaner:{
      justifyContent:"center",
      flexDirection:"row",
      marginBottom:20,
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
      fontSize:70,
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
   },
   ProgressBar:{
      justifyContent:"flex-start",
      width:"100%",

   },
   ProgressBar2:{
      justifyContent:"flex-end",
      flex:1,
      backgroundColor:"red",
      marginLeft:65+"%"

   },


})

export { Main };