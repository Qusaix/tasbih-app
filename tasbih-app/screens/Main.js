import React from'react';
import {Text,View,TouchableOpacity} from"react-native";


const Main = (p) => {

 return (

    <View>

        <Text>تسبيح </Text>

        <TouchableOpacity onPress={p.count_tasbih}>

            <Text>سبح</Text>

         </TouchableOpacity>

    </View>
 )
}


export { Main };