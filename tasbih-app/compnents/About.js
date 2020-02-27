import React from "react";
import {Text,StyleSheet,View} from "react-native";
import Header from "../shared/header.js";
import { SocialIcon } from 'react-native-elements'


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
                        This App Created by Israra Team 

                    </Text>
                  
                    <Text>
                    You Can Fallow Us On Facebook To See Our Lates Apps 
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