import React from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View } from 'react-native';
import styles from './styles/styles'
import Title from './component/Title'



export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Title title="title"/>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </ScrollView>
    );
  }
}