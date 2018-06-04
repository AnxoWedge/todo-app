import React from 'react'
import {View, Text, SectionList, FlatList} from 'react-native'

export default class List extends React.Component {
    render(){
        return(
            <View>
                <SectionList 
                renderItem= {(item,index)=> <Text>{item}</Text>}
                sections={[
                    {title:"teste1", data:["teste1nome"]},
                    {title:"teste2", data:["teste2nome"]},
                    {title:"teste3", data:["teste3nome"]},
                    {title:"teste4", data:["teste4nome"]},
                    ]}
                renderSectionHeader={({section})=><Text>{section.title}</Text>}

                keyExtractor= {(item,index)=> index}
                />

                </View>



        )
    }
}