import React from 'react'
import {View, Text, TextInput, Button, Alert} from 'react-native'

export default class AddListItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: "",

        }
    }
    handleTextChange(text){
        this.setState({name:text,})
    }

    render(){
        return(
            <View>
                <TextInput
                    placeholder="Adicione o seu item"
                    
                    onChangeText={(text)=>this.handleTextChange(text)}
                    onSubmitEditing={this.props.onSubmit}
                />
                <Button title="Button" onPress={this.props.onSubmit}>
                </Button>
            </View>
        )
    }
}