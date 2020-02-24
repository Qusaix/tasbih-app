import React from "react";
import {Text,StyleSheet,View} from "react-native";
import Header from "../shared/header.js";

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
            <View>
                <View>
                    <Text>
                        This About Us Page
                    </Text>

                </View>
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
})