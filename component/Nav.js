import React from 'react'
import {View, FlatList, TouchableHighlight,Text, Alert, Image } from 'react-native'
import style from './../styles/styles'


export default class Nav extends React.Component{
        render(){
            return (
                <View style={style.menubtn}>
                    <TouchableHighlight style={style.stylenav} onPress={() => Alert.alert('quack')}><View><Image source={require('.././assets/home.png')}/></View></TouchableHighlight>
                    <View style={style.stylenavtext}>
                        <Text style= {{textAlign:'center'}}>O que vai fazer hoje?</Text>
                    </View>
                </View>
            )
        }
}