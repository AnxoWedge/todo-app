import React from 'react'
import {TouchableHighlight, Text, Alert} from 'react-native'


export default class Item extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: this.props.index
        }



        this.handleRemove = this.handleRemove.bind(this)
    }

    handleRemove(props){
        let index = this.state.index
        !this.props.Remove || this.props.Remove(index);
        console.log(this.state.lista)
    }

    render(){
        return(
        <TouchableHighlight onLongPress={this.handleRemove.bind(this)}><Text key={this.props.index}>{this.props.item}</Text></TouchableHighlight>
        )
    }
}