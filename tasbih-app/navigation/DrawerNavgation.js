import React from "react";
import { Platform , Dimensions } from "react-native";
import { Navigation } from "react-native-navigation";
import Test from "../compnents/test.js";


// const WIDTH = Dimensions.get('window').width;

// const DrawerNavgatore = createDrawerNavgatore({
//     Home:{
//         screen:Main,
//     }
// })

export default Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => Test);
