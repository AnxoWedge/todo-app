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

        this.handleSubmit= this.handleSubmit.bind(this);
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

    handleSubmit(props){
        let index = this.state.index;
        let text = this.state.text;
        !this.props.Update || this.props.Update(text, index);
    }


    render(){
        return(
        <View>
            <TouchableHighlight onLongPress={this.handleRemove.bind(this)} onPress={this.handleEditSwitch.bind(this)}>
                <Text key={this.props.index + this.props.item.key}> {this.props.item.data} {this.props.item.date}</Text>
                
            </TouchableHighlight>
            <Modal 
                animationType="slide"
                transparent={false}
                visible={this.state.editmode}
                onRequestClose={() => {
                  console.log(lel);
                }}>
                    <View>
                        <TextInput                    
                            placeholder='editar'
                            onChangeText={(text)=>this.handleText(text)}
                            onSubmitEditing={this.handleSubmit}/>
                        <TouchableHighlight onPress={this.handleSubmit.bind(this)}>
                        <Text>Submeter</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.handleEditSwitch.bind(this)}>
                        <Text>Voltar</Text>
                        </TouchableHighlight>

                    </View>
                </Modal>
        </View>
        )
    }
}