import React from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import styles from './styles/styles'
import Title from './component/Title'
import List from './component/List'
import Nav from './component/Nav'
import AddListItem from './component/AddListItem'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      title: "To Do List",
      lista:[
        {key:"teste1", data:["teste1nome"],},
        {key:"teste2", data:["teste2nome"],},
        {key:"teste3", data:["teste3nome"],},
        {key:"teste4", data:["teste4nome"],},
        ],
      text: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  
  /*
componentWillReceiveProps(){
  onSubmit(props)
} */
handleSubmit(stats){
  let lista = this.state.lista
  lista.push(stats)
  this.setState({lista})
}
handleRemove(index){
  let lista = this.state.lista
  lista.splice(index, 1)
  this.setState({lista})
}


  render() {
    return (
      <ScrollView>
        <Nav stylenav={styles.menubtn}/>
        <View style={styles.container}>
          <Title title="Por Fazer"/>
           <List 
           datarino={this.state.lista}
           onRemove={this.handleRemove}
           />
           
           
          

          <Title title="Completo"/>
           <List 
           datarino={this.state.lista}
           />



          <Title title="Lixo"/>
           <List 
           datarino={this.state.lista}
           />
           
           

           <AddListItem onSubmit={this.handleSubmit}/>

           <Text>{this.state.name}</Text>

        </View>
      </ScrollView>
    );
  }
}