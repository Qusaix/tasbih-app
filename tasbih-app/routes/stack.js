import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Main from "../compnents/Main.js"; 
import Header from "../shared/header.js"

const Screens = {
    Home:{
        screen:Main,
        navigationOptions:({navigation})=>{
            return {
                headerTitle : ()=> <Header navigation = {navigation} />
            }
        }
    }
}


const HomeStack = createStackNavigator(Screens);


export default HomeStack;