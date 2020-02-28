import React from "react";
import {Text,StyleSheet,View,NativeModules } from "react-native";
import Header from "../shared/header.js";
import { SocialIcon } from 'react-native-elements'

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
const locale = NativeModules.I18nManager.localeIdentifier 

const en = {
    created:'This App Created by Israra Team',
    fallow:'You Can Fallow Us On Facebook To See Our Lates Apps'
}

const ar = {
    created: 'تم انشاء هذا التطبيق من قبل فريق اصرار' ,
     fallow:"لمزيد من التطبيفات تابعنا على فيسبوك" ,

}


  



  
class About extends React.Component
{
    constructor()
    {
        super();
        this.setState = {

        }
    }

    UNSAFE_componentWillMount (){
       
        var lang_name = []; 

        for(var i=0;i<locale.length;i++)
        {
             if(i < 2 )
             {
                 lang_name.push(locale[i]);
             }
        }
       let chosen_lang =  lang_name.join("")

        i18n.locale = chosen_lang;
        i18n.fallbacks = true;

        i18n.translations = {en,ar};

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