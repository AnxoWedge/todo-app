import React from 'react'
import {View, Text, Alert, SectionList, FlatList, TouchableHighlight} from 'react-native'
import Item from './item'

export default class List extends React.Component {
    constructor(props){
        super(props)
        this.state={
            stats: this.props.datarino
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }
    
    componentWillReceiveProps(props){
        this.setState({stats: this.props.datarino})
    } 


    handleRemoveItem(index){

        !this.props.onRemove || this.props.onRemove(index)
    }
    handleUpdate(stats,index){
        !this.props.OnUpdate || this.props.OnUpdate(stats,index);
    }

    renderItem(item, index){
        return <Item Remove={this.handleRemoveItem} index={index} item={item} Update={this.handleUpdate} />
    }
    
    render(){
        return( 
            <FlatList
                renderItem={({item, index}) => !this.props.filter ? this.renderItem(item, index) : ( this.props.filter(item) ? this.renderItem(item, index) : null)}
                data={this.state.stats}
                keyExtractor={(item, index) => item + index}
                extraData={this.state}
            />
        )
    }
}