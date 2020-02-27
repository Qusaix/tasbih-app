import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer } from "react-navigation";
import Main from "../compnents/Main.js"
import HomeStack from "./stack.js";
import About from './aboutstack.js'
import {Ionicons , AntDesign , Entypo} from "@expo/vector-icons";
const RootDrawerNavgator = createDrawerNavigator({
    App:{
        screen:HomeStack,
        navigationOptions: {
            drawerIcon: (
              <Entypo
                size={25}
                name="home" 
              />
            ),
          },
  
    },
    About:{
        screen:About,
        navigationOptions:{
            drawerIcon: (
                <AntDesign
                name="exclamationcircleo"
                size={24}
                />
            )
        }
    }
})


export default createAppContainer(RootDrawerNavgator);