import React from 'react'
import {View, Text, Alert, SectionList, FlatList, TouchableHighlight} from 'react-native'
import Item from './item'

export default class List extends React.Component {
    constructor(props){
        super(props)
        this.state={
            stats: this.props.datarino
        }
    }
    
    componentWillReceiveProps(props){
        this.setState({stats: this.props.datarino})
    } 


    handleRemoveItem(index){

        !this.props.onRemove || this.props.onRemove(index)

    }
    
    render(){
        return( 
            <SectionList
                renderItem={({item, index, section}) => <Item Remove={this.handleRemoveItem.bind(this)} index={index} item={item} section={section}/>  }
                sections={this.state.stats}
                keyExtractor={(item, index) => item + index}
            />
        )
    }
}