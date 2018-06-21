import React from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Alert, TextInput, Modal} from 'react-native'
import { fromHsv } from 'react-native-color-picker'
import AddEdit from './AddEdit'



export default class Item extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: this.props.index,
            editmode: false,
            text: this.props.item.data,
            color: fromHsv(this.props.item.color),
        }

        this.handleSubmit= this.handleSubmit.bind(this);
        //this.handleText = this.handleText.bind(this);
                //this.handleRemove = this.handleRemove.bind(this)
        this.handleEditSwitch = this.handleEditSwitch.bind(this)
    }
   
 
    handleEditSwitch(editmode){
        this.setState({
            editmode: !this.state.editmode,
        })
    }

    handleRemove(props){
        let index = this.state.index
        !this.props.Remove || this.props.Remove(index);
    }
   /* handleText(text){
        this.setState({text: text})
    }
*/
    handleSubmit(stats, props){
        let index = this.state.index;
        let colorino = fromHsv(stats.color);
        this.setState({color: colorino})
        !this.props.Update || this.props.Update(stats, index);
    }


    render(){
        const backColor = {backgroundColor : this.state.color}
        return(
        <View>
            <TouchableHighlight  onLongPress={this.handleRemove.bind(this)} onPress={this.handleEditSwitch.bind(this)}>
                <Text style={backColor} key={this.props.index + this.props.item.key}> {this.props.item.data} {this.props.item.date}</Text>
                
            </TouchableHighlight>
            <Modal 
                animationType="slide"
                transparent={false}
                visible={this.state.editmode}
                onRequestClose={() => {
                  console.log(lel);
                }}>

                <AddEdit
                onUpdate={this.handleSubmit}
                onEdit={this.handleEditSwitch}
                />

                </Modal>
        </View>
        )
    }
}