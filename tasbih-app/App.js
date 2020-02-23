import React from 'react';
import { StyleSheet, Text, View , Alert , ImageBackground } from 'react-native';
import { Main } from './compnents/Main.js';
import {DrawerNavigatore} from './navigation/DrawerNavgation.js';
import { NavigationContainer } from '@react-navigation/native';
import Navgator from "./routes/drawer.js"
import Stack from "./routes/stack.js";

export default class App extends React.Component{

  constructor(){
    super();

    this.state = {
      tasbih:0,
      chosen_word:"",

    }
  }


  count_tasbih = ()=>{
     return this.setState({'tasbih':this.state.tasbih+1}) 
  }

  chose_word = (value)=>{
    return this.setState({'chosen_word':value});
  }

  delete_count_tasbih = ()=>{
    return this.setState({'tasbih':this.state.tasbih-1});
  }

  reset_tasbih = ()=>{
    return this.setState({'tasbih':0});
  }
  
  render(){

    return (

       <Navgator />

   
     );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
