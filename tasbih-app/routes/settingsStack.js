import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../shared/header.js";
import Settings from "../compnents/Settings";


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