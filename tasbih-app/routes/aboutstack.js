import React from "react";
import {NativeModules } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import About from "../compnents/About.js"; 
import Header from "../shared/header.js"
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

const locale = NativeModules.I18nManager.localeIdentifier 

  const en = {
    title:"About Us"
  };

  const ar = {
    title: 'شسيشسي' ,

}

  var lang_name = []; 

  for(var i=0;i<locale.length;i++)
  {
       if(i < 2 )
       {
           lang_name.push(locale[i]);
       }
  }

 let chosen_lang =  lang_name.join("");
 

  i18n.locale = chosen_lang;
  i18n.fallbacks = true;
  

  i18n.translations = {en,ar};



const Screens = {
    Home:{
        screen:About,
        navigationOptions:({navigation})=>{
            return {
                headerTitle : ()=> <Header navigation = {navigation} tiltle="About Us"/>
            }
        }
    }
}


const HomeStack = createStackNavigator(Screens,{
  defaultNavigationOptions :{
    headerTintColor:"#444",
    height:60,
}
});


export default HomeStack;