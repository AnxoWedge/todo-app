import React from 'react'
import {TouchableHighlight, Text, Alert} from 'react-native'


export default class Item extends React.Component {
    render(){
        return(
        <TouchableHighlight onLongPress={()=> Alert.alert('ayy')}><Text key={this.props.index}>{this.props.item}</Text></TouchableHighlight>
        )
    }
}