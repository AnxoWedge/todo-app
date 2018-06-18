import React from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, TouchableHighlight, Alert, Button } from 'react-native';
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
        {key:"teste1", data:["teste1nome"], date:"2000-1-1"},
        {key:"teste2", data:["teste2nome"], date:"2000-1-1"},
        {key:"teste3", data:["teste3nome"], date:"2000-1-1"},
        {key:"teste4", data:["teste4nome"], date:"2000-1-1"},
        ],
      text: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handlingUpdate = this.handlingUpdate.bind(this);
  }


  /* 19- cor para cada item 
      20- o mesmo form para o add e o edit */ 
  
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
handlingUpdate(text, index){
  let lista = this.state.lista
  let textroni = text;
  let indexroni = index;
  let stats = {
    key: textroni,
    data: [textroni],
  }
  lista[index]= stats
  this.setState({lista})
  console.log(text)
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
           OnUpdate={this.handlingUpdate}
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

           <Button onPress={() =>console.log(this.state.lista[4])} title='CONSOLA'></Button>

        </View>
      </ScrollView>
    );
  }
}