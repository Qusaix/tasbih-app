import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../shared/header.js";
import Settings from "../compnents/Settings";
import {AntDesign}from "@expo/vector-icons";


const Screens = {
    Settings:{
        screen:Settings,
        navigationOptions: {
            title: 'Settings',
            headerTitleAlign: 'center',
            headerLeft: ()=> <AntDesign name="setting"  size={28} />,
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