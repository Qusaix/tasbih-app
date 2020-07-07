import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Main from "../compnents/Main.js"; 
import {NativeModules } from "react-native";
import Header from "../shared/header.js"
import i18n from '../translations/translator.js';
import {connect} from "react-redux";


  

const Screens = {
    Home:{
        screen:Main,
        navigationOptions:({navigation})=>{
            return {
                headerTitle : ()=> <Header navigation = {navigation}  tiltle = ""/>,
                headerStyle:{
                  backgroundColor:"#0d0d0d"
                }
            }
        }
    }
}


const HomeStack = createStackNavigator(Screens);

function mapStateToProps(state)
{
   console.log(state);
   return{
      round:state.round,
      pray:state.pray,
   }
}

function mapDispatchToProps(dispatch)
{
   return{
      knowThePray:()=>dispatch({"type":"KNOW_THE_PRAY"}),
      addRounds:()=>dispatch({"type":"ADD_NEW_ROUND"}),
      knowThePrev:()=>dispatch({"type":"KNOW_THE_PREVIOUS_ROUNDS"}),
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeStack);




//export default connect(mapStateToProps,mapDispatchToProps)(HomeStack);