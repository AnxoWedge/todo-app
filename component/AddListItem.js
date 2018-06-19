import React from 'react'
import {View, Text, TextInput, Button, Alert, TouchableHighlight, Modal} from 'react-native'
import DatePicker from 'react-native-datepicker';
import AddEdit from './AddEdit'

export default class AddListItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            stats:{
                key: "",
                data: "", 
            },
            editmode: false,
        
        
    }

    this.handleTextChange = this.handleTextChange.bind(this);  
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleEditSwitch = this.handleEditSwitch.bind(this);
}

    handleTextSubmit(stats){
        this.handleTextChange(stats)
        let verifiedStats = this.state.stats
        !this.props.onSubmit || this.props.onSubmit(verifiedStats)
    }
    handleEditSwitch(editmode){
        this.setState({editmode: !this.state.editmode});
    }

    handleTextChange(stats){
        this.setState({
            stats:{
                key: stats.data,
                data: stats.data,
                date: stats.date,
            }
        })}

    render(){
        return(
            <View>
                <Button title="ADD" onPress={()=>{this.setState({editmode:!this.state.editmode})}}> </Button>
                <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={this.state.editmode}
                    onRequestClose={() => {
                        console.log(lel);
                }}>
                    <AddEdit
                        onUpdate={this.handleTextSubmit}
                        onEdit={this.handleEditSwitch}
                        />
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