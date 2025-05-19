import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const DATA = [
  { id: '1', title: 'Elma' },
  { id: '2', title: 'Armut' },
  { id: '3', title: 'Muz' },
  { id: '4', title: 'Çilek' },
  { id: '5', title: 'Kivi' },
];


export default function App() {

  const renderItem = ({item}: {item:{id:string; title:string}})=>(
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  )

  return (
    <View>
        <FlatList
          data={DATA}
          keyExtractor={item=>item.id}
          renderItem={renderItem}
        
        />

    </View>
  )
}

const styles = StyleSheet.create({
  list :{
    paddingVertical:16
  },
  item:{
    backgroundColor: '#e3f2fd',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 6,

  },
   text: {
    fontSize: 16,
    color: '#0d47a1',
  },

})