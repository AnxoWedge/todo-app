import React from 'react'
import {View, Text, TextInput, Button, Alert, TouchableHighlight, Modal} from 'react-native'
import DatePicker from 'react-native-datepicker'
import {ColorPicker} from 'react-native-color-picker'

/* PROPS NEEDED 
onUpdate
editmode

*/ 


export default class AppEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                data: [""],
                date: "",
            }
            this.handleSubmit = this.handleSubmit.bind(this)
            this.handleEditSwitch = this.handleEditSwitch.bind(this)
        }

handleSubmit(){
    let stats = this.state
    !this.props.onUpdate || this.props.onUpdate(stats)
}

handleEditSwitch(){
    let editmode = false
    !this.props.onEdit || this.props.onEdit(editmode)
}    
    render(){
        return(
            
            <View>
                <TextInput                    
                    placeholder='Escreva a sua tarefa'
                    onChangeText={(text)=>this.setState({data: [text],})}
                    onSubmitEditing={this.handleSubmit}/>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="Selecione a Data"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2017-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date})}}
                />
                <ColorPicker
                    onColorSelected={color => alert(`Color selected: ${color}`)}
                    style={{flex: 1}}
                />
                <TouchableHighlight onPress={this.handleSubmit}>
                <Text>Submeter</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.handleEditSwitch}>
                <Text>Voltar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}