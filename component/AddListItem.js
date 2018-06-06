import React from 'react'
import {View, Text, TextInput, Button, Alert} from 'react-native'

export default class AddListItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: this.props.text,
            arrayItem: [],

        }
        this.onSubmit = this.onSubmit.bind(this)

    }

    onSubmit(props){
        Alert.alert(this.props.text)
        let arrayItem = this.state.arrayItem
        arrayItem.push(this.props.text)
        this.setState({name:" ",
        arrayItem: arrayItem,
        
    })
    }

    render(){
        return(
            <View>
                <TextInput
                    placeholder="Adicione o seu item"
                    onChangeText={(text)=>{this.setState({name:text,})}}
                    onSubmitEditing={this.onSubmit(this.props)}
                />
                <Button title="Button" onPress={this.onSubmit}>
                </Button>
            </View>
        )
    }
}