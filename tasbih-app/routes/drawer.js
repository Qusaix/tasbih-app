import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer } from "react-navigation";
import Main from "../compnents/Main.js"
import HomeStack from "./stack.js";
import About from './aboutstack.js'
import {Ionicons , AntDesign , Entypo} from "@expo/vector-icons";

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  en: { appName: 'TASBIH', about:'About US'},
  ar: { appName: 'تسبيح' , about:"من نحن" },
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

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
    }
})


export default createAppContainer(RootDrawerNavgator);