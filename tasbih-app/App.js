import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './screens/Main.js';

export default class App extends React.Component{

  constructor(){
    super();

    this.state = {
      tasbih:0
    }
  }

  count_tasbih = ()=>{
     return this.setState({'tasbih':this.state.tasbih+1}) 
  }
  
  render(){

    return (
     <View style={styles.container}>

       <Main count_tasbih={this.count_tasbih}/> 
       <Text>{this.state.tasbih}</Text>
       <Text>قصي</Text>

      </View>
    
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
