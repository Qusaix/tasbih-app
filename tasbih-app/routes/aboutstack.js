import React from "react";
import {NativeModules } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import About from "../compnents/About.js"; 
import Header from "../shared/header.js"
import i18n from 'i18n-js';



const Screens = {
    Home:{
        screen:About,
        navigationOptions:({navigation})=>{
            return {
                headerTitle : ()=> <Header navigation = {navigation} tiltle="About Us"/>,
                
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