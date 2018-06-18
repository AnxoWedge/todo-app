import React from 'react'
import {View, Text, TextInput, Button, Alert, TouchableHighlight} from 'react-native'
//import {DatePicker} from 'react-native-ui-xg';

export default class AddListItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            stats:{
                title: ["wat"],
                data: ["sim"],
                date: "2018-06-17",
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
               {/* <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="Seleccione a data"
                    format="DD-MM-YYYY"
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
                    onDateChange={(date) => {this.setState({date: date})}}
                />*/}
                <TouchableHighlight onPress={this.handleTextSubmit}><Text>Adicionar</Text></TouchableHighlight>

                <Text>{this.state.stats.data}</Text>
            </View>
        )
    }
}