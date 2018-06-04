import React from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View } from 'react-native';
import styles from './styles/styles'
import Title from './component/Title'
import List from './component/List'
import Nav from './component/Nav'


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      title: "fji eifje fjiei fjwifjpjfp j",
      teste: [
      {title:"teste1"},
      {title:"teste2"},
      {title:"teste3"},
      {title:"teste4"},
      ]

    }
  }
  render() {
    return (
      <ScrollView>
        <Nav stylenav={styles.menubtn}/>
        <View style={styles.container}>
          <Title title="Por Fazer"/>
           {//<List/>
           }
          

          <Title title="Completo"/>
           {//<List/>
           }

          <Title title="Lixo"/>
           {//<List/>
           }

        </View>
      </ScrollView>
    );
  }
}