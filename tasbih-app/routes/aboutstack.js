import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import About from "../compnents/About.js"; 
import Header from "../shared/header.js"

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


const HomeStack = createStackNavigator(Screens);


export default HomeStack;