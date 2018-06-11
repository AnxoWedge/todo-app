import React from 'react'
import {TouchableHighlight, Text, Alert} from 'react-native'


export default class Item extends React.Component {
    render(){
        return(
        <TouchableHighlight onLongPress={()=> Alert.alert('are you sure you wanna edit')}><Text key={this.props.index}>{this.props.item}</Text></TouchableHighlight>
        )
    }
}