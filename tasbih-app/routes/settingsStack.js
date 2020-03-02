import React from "react";
import {NativeModules } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Header from "../shared/header.js";
import Settings from "../compnents/Settings";
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';



const Screens = {
    Settings:{
        screen:Settings,
        navigationOptions:({navigation})=>{
            return {
                headerTitle : ()=> <Header navigation = {navigation} tiltle="Settings"/>
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