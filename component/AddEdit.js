import React from 'react'
import {ScrollView, View, Text, TextInput, Button, Alert, TouchableHighlight, Modal} from 'react-native'
import DatePicker from 'react-native-datepicker'
import {ColorPicker} from 'react-native-color-picker'
import AppEditStyle from './../styles/appEditStyle'

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
            this.handleChangeData = this.handleChangeData.bind(this)
            this.handleChangeDate = this.handleChangeDate.bind(this)
            this.handleChangeColor = this.handleChangeColor.bind(this)
        }

handleSubmit(){
    let stats = this.state
    !this.props.onUpdate || this.props.onUpdate(stats)
    this.handleEditSwitch()
}

handleEditSwitch(){
    let editmode = false
    !this.props.onEdit || this.props.onEdit(editmode)
}    

handleChangeData(text){
    this.setState({data: [text],})
}
handleChangeDate(date){
    this.setState({date: [date],})
}
handleChangeColor(color){
    this.setState({color})
}
    render(){
        return(
            
            <ScrollView contentContainerStyle={AppEditStyle.AppEdit_mainFrame}>
                <View style={AppEditStyle.AppEdit_text}>
                    <TextInput                    
                        placeholder='Escreva a sua tarefa'
                        onChangeText={(text)=> this.handleChangeData(text)}
                        onSubmitEditing={this.handleSubmit}/>
                </View>
                <View style={AppEditStyle.AppEdit_calender}>
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
                        onDateChange={(date) => this.handleChangeDate(date)}
                    />
                </View>
                <View style={AppEditStyle.AppEdit_colorpick}>
                    <ColorPicker
                        onColorChange= {color=> this.handleChangeColor(color)}
                        onColorSelected={color => alert(`Color selected: ${color}`)}
                        style={{flex: 1}}
                    />
                </View>
                <View style={AppEditStyle.AppEdit_submitSec}>
                    <TouchableHighlight style={AppEditStyle.AppEdit_submitBtn} onPress={this.handleSubmit}>
                    <Text>Submeter</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={AppEditStyle.AppEdit_submitBack} onPress={this.handleEditSwitch}>
                    <Text>Voltar</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}