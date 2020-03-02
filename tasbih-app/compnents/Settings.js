import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,AsyncStorage} from "react-native";
import DialogInput from 'react-native-dialog-input';
import { Ionicons} from "@expo/vector-icons";

// REate Redux
import {connect} from "react-redux";

class Settings extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            pray:"",
            pop_up:false,
            deleteDialog:false,

        } 
    }

    take_pray = (pray)=>{
     this.setState({"pray":pray})
     return this.setState({'pop_up':false});
    }

    delete_all_rounds = () =>{ 
        let zero = 0;
        AsyncStorage.setItem('RoundCount',zero.toString());
        this.props.round = 0;
        return console.warn("Hello");
    }


    render(){
        return(
            <View>
                <View style={Style.section}>
                <TouchableOpacity style={Style.sectionAction}>
                <Text style={Style.Title} onPress={()=>this.setState({"pop_up":true})}>Add/Change The Pray</Text> 
                </TouchableOpacity>
                <Text style={Style.TextContent}>Your Pray: {this.state.pray}</Text>

                </View>
                <View style={Style.section}>
                <TouchableOpacity onPress={ () => this.setState({'deleteDialog':true})} style={Style.sectionAction} >
                <Text style={Style.Title}>Delete All Rounds</Text>
                <Ionicons name="ios-trash" color="red" size={25} />

                </TouchableOpacity>  

                </View>

          {/* Pray Pop Ups */}      
        <DialogInput isDialogVisible={this.state.pop_up}
            title={"Add Your Pray"}
            message={""}
            hintInput ={""}
            submitInput={ (inputText) => {this.take_pray(inputText)} }
            closeDialog={ () => {this.setState({"pop_up":false})}}>
        </DialogInput>

        <DialogInput
        isDialogVisible={this.state.deleteDialog}
        title={"are you sure you want to delete all the rounds"}
        hintInput={"Any suggestion"}
        submitInput={(inputText) =>{
            this.props.deleteROUNDS()
            return this.setState({'deleteDialog':false});
        }}
        closeDialog={ () => {this.setState({"deleteDialog":false})}}>
        ></DialogInput>



            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        tasbih:state.tasbih,
    }
}

function mapDispatchToProps(dispatch){
    return{
        deleteROUNDS:()=>dispatch({"type":"DELETE_ROUNDS"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings);

const Style = StyleSheet.create({
    section:{
        marginLeft:"5%",
        marginTop:"5%",
        borderBottomWidth:0.4

    },
    Title:{
        color:"#a68b56",
        fontSize:18,
        fontWeight:"bold",
        marginRight:"2%",


    },
    TextContent:{
        fontSize:15,
        fontWeight:"900",

    },
    sectionAction:{
    }
})