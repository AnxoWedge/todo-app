import React from 'react'
import {View, TouchableHighlight, Text, Alert, TextInput, Modal} from 'react-native'


export default class Item extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: this.props.index,
            editmode: false,
            text: this.props.item.data,
        }


        this.handleText = this.handleText.bind(this);
                //this.handleRemove = this.handleRemove.bind(this)
    }

    handleEditSwitch(props) {
        this.setState({
            editmode: !this.state.editmode,
        })
    }

    handleRemove(props){
        let index = this.state.index
        !this.props.Remove || this.props.Remove(index);
    }
    handleText(text){
        this.setState({text: text})
    }

    handleSubmit(){
        let text = this.state.text;
        !this.props.Update || this.props.Update(this);
    }


    render(){
        return(
        <View>
            <TouchableHighlight onLongPress={this.handleRemove.bind(this)} onPress={this.handleEditSwitch.bind(this)}>
                <Text key={this.props.index + this.props.item.key}> {this.props.item.data}</Text>
                
            </TouchableHighlight>
            <Modal 
                animationType="slide"
                transparent={false}
                visible={this.state.editmode}
                onRequestClose={() => {
                  alert('Modal has been closed.');
                }}>
                    <View>
                        <TextInput                    
                            placeholder={this.state.text}
                            onChangeText={(text)=>this.handleText(text)}
                            onSubmitEditing={this.handleSubmit}/>
                        <TouchableHighlight onPress={this.handleEditSwitch.bind(this)}>
                        <Text>{this.state.editmode ? "yes" : "no"}</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
        </View>
        )
    }
}