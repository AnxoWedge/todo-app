import React from 'react'
import {View, Text, TextInput, Button, Alert, TouchableHighlight} from 'react-native'

export default class AddListItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            stats:{
                title: ["wat"],
                data: ["sim"],
        },
        
        
    }

    this.handleTextChange = this.handleTextChange.bind(this)   
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
}

    handleTextSubmit(props){
        let stats = Object.assign({}, this.state.stats)
        !this.props.onSubmit || this.props.onSubmit(stats)
    }

    handleTextChange(text){
        this.setState({
            stats:{
                title: [text],
                data: [text],
            }
        })}

    render(){
        return(
            <View>
                <TextInput
                    placeholder="Adicione o seu item"
                    onChangeText={(text)=>this.handleTextChange(text)}
                    onSubmitEditing={this.handleTextSubmit}
                />
                <TouchableHighlight onPress={this.handleTextSubmit}><Text>Adicionar</Text></TouchableHighlight>

                <Text>{this.state.stats.data}</Text>
            </View>
        )
    }
}