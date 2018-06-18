import React from 'react'
import {View, Text, TextInput, Button, Alert, TouchableHighlight, Modal} from 'react-native'
import DatePicker from 'react-native-datepicker';
import AddEdit from './../component/AddEdit'

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
                key: [text],
                data: [text],
                date: this.state.date,
            }
        })}

    render(){
        return(
            <View>
            <Modal 
                animationType="slide"
                transparent={false}
                visible={this.state.editmode}
                onRequestClose={() => {
                    console.log(lel);
            }}>
                {/*<TextInput
                    placeholder="Adicione o seu item"
                    onChangeText={(text)=>this.handleTextChange(text)}
                    onSubmitEditing={this.handleTextSubmit}
                />

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

                <TouchableHighlight onPress={this.handleTextSubmit}><Text>Adicionar</Text></TouchableHighlight>
                <Text>{this.state.stats.data}</Text>*/}
            </Modal>
            </View>
        )
    }
}