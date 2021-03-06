import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer } from "react-navigation";
import HomeStack from "./stack.js";
import About from './aboutstack.js';
import SettingsStack from "./settingsStack";
import {AntDesign , Entypo} from "@expo/vector-icons";

import * as Localization from 'expo-localization';
import i18n from '../translations/translator.js';



const RootDrawerNavgator = createDrawerNavigator({
  ChangeMe:{
        screen:HomeStack,
        navigationOptions: {
          title: i18n.t('appName'),
            drawerIcon: (
              <Entypo
                size={25}
                name="home" 
              />
            ),
          },
  
    },
     Settings:{
      screen:SettingsStack,
      navigationOptions:{
        title:i18n.t('setting'),
        drawerIcon:(
          <AntDesign
          name="setting"
          size={24}
          />
        ),
        

      }
    },
    About:{
        screen:About,
        navigationOptions:{
          title:i18n.t('about'),
            drawerIcon: (
                <AntDesign
                name="exclamationcircleo"
                size={24}
                />
            )
        }
    },
})


export default createAppContainer(RootDrawerNavgator);