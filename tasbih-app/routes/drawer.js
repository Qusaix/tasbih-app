import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer } from "react-navigation";
import Main from "../compnents/Main.js"
import HomeStack from "./stack.js";
import About from './aboutstack.js'

const RootDrawerNavgator = createDrawerNavigator({
    App:{
        screen:HomeStack
    },
    About:{
        screen:About
    }
})


export default createAppContainer(RootDrawerNavgator);