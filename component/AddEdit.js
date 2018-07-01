import React from 'react'
import {ScrollView, View, Text, TextInput, Button, Alert, TouchableHighlight, Modal, Picker} from 'react-native'
import DatePicker from 'react-native-datepicker'
import {ColorPicker} from 'react-native-color-picker'
import AppEditStyle from './../styles/appEditStyle'
import Title from './Title'

/* PROPS NEEDED 
onUpdate
editmode

*/ 


export default class AppEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                data: "n",
                date: "n",
                color:"n",
                warning: false,
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
        const warningStyle = {
            color: 'red',
        }

        return(
            
            <ScrollView contentContainerStyle={AppEditStyle.AppEdit_mainFrame}>
                <View style={AppEditStyle.AppEdit_text}>
                    <Title title="A Sua Tarefa"/>
                    <View style={this.state.warning ?  {opacity:1} : {opacity:0, height: 0}}><Text >Por Favor, preencha este campo</Text></View>
                    <TextInput
                        maxLength={25}               
                        placeholder='Escreva a sua tarefa'
                        onChangeText={(text)=> this.handleChangeData(text)}
                        onSubmitEditing={this.handleSubmit}/>
                </View>
                <View style={AppEditStyle.AppEdit_calender}>
                    <Title title="A Data da sua Tarefa"/>
                    <View style={this.state.warning ?  {opacity:1} : {opacity:0, height: 0}}><Text >Por Favor, preencha este campo</Text></View>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        placeholder="Selecione a Data"
                        format="DD-MM-YYYY"
                        minDate="01-01-1990"
                        maxDate="31-12-2999"
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
                        }}
                        onDateChange={(date) => this.handleChangeDate(date)}
                    />
                </View>
                <View style={AppEditStyle.AppEdit_colorpick}>
                    <Title title="Personalize a sua Tarefa"/>
                    <View style={this.state.warning ?  {opacity:1} : {opacity:0, height: 0}}><Text >Por Favor, preencha este campo</Text></View>
                    <ColorPicker
                        onColorChange= {color=> this.handleChangeColor(color)}
                        onColorSelected={color => alert(`Color selected: ${color}`)}
                        style={{flex: 1}}
                    />
                </View>
                <View style={AppEditStyle.AppEdit_colorpick}>
                    <Title title="Personalize a sua Tarefa"/>
                    <View style={this.state.warning ?  {opacity:1} : {opacity:0, height: 0}}><Text >Por Favor, preencha este campo</Text></View>
                    <Picker
                        selectedValue={this.state.status}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({status: itemValue})}>
                        <Picker.Item label="Incompleto" value="incompleto" />
                        <Picker.Item label="completo" value="completo" />
                    </Picker>
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