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
       // this.handleTextChange(stats)
        let verifiedStats = stats
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
                color: stats.color,
                status: stats.status,
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
                    
                }}>
                    <AddEdit
                        onUpdate={this.handleTextSubmit}
                        onEdit={this.handleEditSwitch}
                        />
                </Modal>
            </View>
                          )
                     }
                }