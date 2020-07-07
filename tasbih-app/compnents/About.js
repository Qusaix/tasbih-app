import React from "react";
import {Text,StyleSheet,View,NativeModules } from "react-native";
import { SocialIcon } from 'react-native-elements'

import i18n from 'i18n-js';

  



  
class About extends React.Component
{
    constructor()
    {
        super();
        this.setState = {

        }
    }

  

    render(){
        return(
            <View style={style.container}>
                  <Text>
                        {i18n.t('created')} 

                    </Text>
                  
                    <Text>
                    {i18n.t('fallow')} 
                    </Text>
                    <SocialIcon type='facebook' /> 
                    <Text>@israrTeam</Text>



            </View>
        )
    }
}

export default About;


const style = StyleSheet.create({
    main_contaner:{
        justifyContent:"center",
     },
     container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      social: {
          flexDirection:"row",
      }
})