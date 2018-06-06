import React from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
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
        {title:"teste1", data:["teste1nome"],},
        {title:"teste2", data:["teste2nome"],},
        {title:"teste3", data:["teste3nome"],},
        {title:"teste4", data:["teste4nome"],},
        ],
      text: "",
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  handledSubmission(text){
    console.log('e')
  }

  onSubmit(props){
    //Alert.alert(this.props.text)
    let arrayItem = Object.assign({},this.state.lista) 
    arrayItem.push(this.props.text)
    this.setState({name:" ",
    lista: arrayItem,
    })

}


  render() {
    return (
      <ScrollView>
        <Nav stylenav={styles.menubtn}/>
        <View style={styles.container}>
          <Title title="Por Fazer"/>
           <List datarino={this.state.lista}/>
           
          

          <Title title="Completo"/>
           <List datarino={this.state.lista}/>
           

          <Title title="Lixo"/>
           <List datarino={this.state.lista}/>
           

           <AddListItem text={this.state.text} handledSubmission={this.handledSubmission} onSubmit={this.onSubmit}/>

        </View>
      </ScrollView>
    );
  }
}