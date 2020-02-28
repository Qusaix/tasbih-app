import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Main from "../compnents/Main.js"; 
import {NativeModules } from "react-native";

import Header from "../shared/header.js"
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

const locale = NativeModules.I18nManager.localeIdentifier 

  const en = {
    title:"TasBish"
  };

  const ar = {
    title: 'تسبيح' ,

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
        screen:Main,
        navigationOptions:({navigation})=>{
            return {
                headerTitle : ()=> <Header navigation = {navigation}  tiltle = "Tasbih"/>
            }
        }
    }
}


const HomeStack = createStackNavigator(Screens);


export default HomeStack;