import React from 'react'
import {View, FlatList, TouchableHighlight,Text, Alert, Image } from 'react-native'


export default class Nav extends React.Component{
        render(){
            return (
                <View>
                    <TouchableHighlight onPress={() => Alert.alert('ayy')}><View style={this.props.stylenav}><Image source={require('.././assets/home.png')}/></View></TouchableHighlight> 
                </View>
            )
        }
}