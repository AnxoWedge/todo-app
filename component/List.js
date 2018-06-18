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
    handleUpdate(text,index){
        !this.props.OnUpdate || this.props.OnUpdate(text,index);
    }
    
    render(){
        return( 
            <FlatList
                renderItem={({item, index}) => <Item Remove={this.handleRemoveItem.bind(this)} index={index} item={item} Update={this.handleUpdate.bind(this)} />  }
                data={this.state.stats}
                keyExtractor={(item, index) => item + index}
                extraData={this.state}
            />
        )
    }
}