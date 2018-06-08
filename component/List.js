import React from 'react'
import {View, Text, Alert, SectionList, FlatList, TouchableHighlight} from 'react-native'
import Item from './item'

export default class List extends React.Component {  
    render(){
        return(
            <SectionList
                renderItem={({item, index, section}) => <Item index={index} item={item}/>  }
                sections={this.props.datarino}
                keyExtractor={(item, index) => item + index}
            />
        )
    }
}