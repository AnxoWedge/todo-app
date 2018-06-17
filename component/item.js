import React from 'react'
import {View, TouchableHighlight, Text, Alert, TextInput} from 'react-native'


export default class Item extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: this.props.index,
            editmode: false,
        }



        //this.handleRemove = this.handleRemove.bind(this)
    }

    handleEdit(props) {
        this.setState({
            editmode: !this.state.editmode,
        })
        console.log(this.state.editmode)
    }

    handleRemove(props){
        let index = this.state.index
        !this.props.Remove || this.props.Remove(index);
    }

    render(){
        return(
        <View>
            <TouchableHighlight onLongPress={this.handleRemove.bind(this)} onPress={this.handleEdit.bind(this)}>
                <Text key={this.props.index + this.props.item.key}> {this.props.item.data}</Text>
            </TouchableHighlight>
        </View>
        )
    }
}