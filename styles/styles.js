import React from 'react'
import {StyleSheet, Dimensions, } from 'react-native'


function calc(bruno) {return bruno}


const styles = StyleSheet.create({
    bigfathercontainer:{
      backgroundColor:'#144281',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    container: {
      flex: 9,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    menubtn:{
      flex: 1,
      paddingTop: 65,
      flexDirection: 'row',
      textAlign: 'center',
      marginBottom: 20,
      backgroundColor: 'yellow',
      height: calc(Dimensions.get('window').height * 0.1)
    },
    stylenav:{
      flex:1,
      flexDirection: 'row',
      backgroundColor:'#F9BD5B',
      alignItems: 'center',
      justifyContent:'center',
      textAlign: 'center',
    },
    stylenavtext:{
      backgroundColor:'#0A7E64',
      flex: 3,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'center',
      textAlign: 'center',
    }
    
  });
  


  export default styles