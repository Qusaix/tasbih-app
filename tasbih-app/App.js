import React from 'react';
import { StyleSheet, Text, View , Alert , ImageBackground } from 'react-native';
import { Main } from './compnents/Main.js';
import { Header } from "./compnents/Header";

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

     <ImageBackground source={require("./assets/background.jpg")} style={styles.container}>
       <Header />

       <Main 
       count_tasbih={this.count_tasbih} 
       tasbih={this.state.tasbih}
       delete_count_tasbih = {this.delete_count_tasbih}
       reset_tasbih = {this.reset_tasbih}
       /> 

      </ImageBackground >
    
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
