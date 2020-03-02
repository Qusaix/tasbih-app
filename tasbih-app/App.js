import React from 'react';
import { StyleSheet, Text, View , Alert , ImageBackground ,AsyncStorage} from 'react-native';
import { Main } from './compnents/Main.js';
import {DrawerNavigatore} from './navigation/DrawerNavgation.js';
import { NavigationContainer } from '@react-navigation/native';
import Navgator from "./routes/drawer.js"
import Stack from "./routes/stack.js";
// React Redux 
import {createStore} from "redux";
import {Provider} from "react-redux";

// The States
const initialState = {
  round:0,
  pray:"",

}

const reducer =  (state=initialState,action)=>{
  console.log(action);
  switch(action.type)
  {
    case "DELETE_ROUNDS":
      return{round:state.round = 0}  
    case "ADD_NEW_ROUND":
      return{round:state.round+1}
    case "KNOW_THE_PREVIOUS_ROUNDS":
      let rounNumber =  AsyncStorage.getItem("RoundCount");
     
      if(typeof rounNumber !== "number")
      {

        return {round:state.round = 0};
      }
      return {round:state.round = rounNumber}  
  }
  return state;
}

const store = createStore(reducer);


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

      <Provider store={store}>

       <Navgator  />

       </Provider>

   
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
