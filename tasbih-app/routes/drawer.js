import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer } from "react-navigation";
import Main from "../compnents/Main.js"
import HomeStack from "./stack";

const RootDrawerNavgator = createDrawerNavigator({
    Home:{
        screen:HomeStack
    }
})


export default createAppContainer(RootDrawerNavgator);