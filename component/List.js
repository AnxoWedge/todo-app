import React from 'react'
import {View, Text, Alert, SectionList, FlatList, TouchableHighlight} from 'react-native'

export default class List extends React.Component {  
    render(){
        return(
            <SectionList
                renderItem={({item, index, section}) =>  <TouchableHighlight onLongPress={()=> Alert.alert('ayy')}><Text key={index}>{item}</Text></TouchableHighlight>}
                sections={this.props.datarino}
                keyExtractor={(item, index) => item + index}
            />
        )
    }
}