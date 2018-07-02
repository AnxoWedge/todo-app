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
        {key:"teste1", data:["teste1nome"], date:"2000-1-1", color:"purple", status:"incompleto",},
        {key:"teste2", data:["teste2nome"], date:"2000-1-1", color:"red", status:"incompleto",},
        {key:"teste3", data:["teste3nome"], date:"2000-1-1", color:"blue", status:"completo",},
        {key:"teste4", data:["teste4nome"], date:"2000-1-1", color:"green", status:"completo",},
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
handleSubmit(verifiedStats){
  let lista = this.state.lista
  lista.push(verifiedStats)
  this.setState({lista})
}
handleRemove(index){
  let lista = this.state.lista
  lista.splice(index, 1)
  this.setState({lista})
}
handlingUpdate(stats, index){
  let lista = this.state.lista
  let indexroni = index;
  let verifiedStats = {
    key: stats.data,
    data: stats.data,
    date: stats.date,
    color: stats.color,
    status: stats.status,
  }
  lista[index] = verifiedStats
  this.setState({lista})
}


  render() {
    return (
      <ScrollView contentContainerStyle={styles.bigfathercontainer}>
        <Nav />
        <View style={styles.container}>
          <Title title="Por Fazer"/>
           <List 
           datarino={this.state.lista}
           onRemove={this.handleRemove}
           OnUpdate={this.handlingUpdate}
           filter= {item => item.status === "incompleto"}
           />
           
          <Title title="Completo"/>
           <List 
           datarino={this.state.lista}
           onRemove={this.handleRemove}
           OnUpdate={this.handlingUpdate}
           filter= {item => item.status === "completo"}
           />
           <AddListItem onSubmit={this.handleSubmit}/>

           <Text>{this.state.name}</Text>

           <Button onPress={() =>console.log(this.state.lista[4])} title='CONSOLA'></Button>

        </View>
      </ScrollView>
    );
  }
}