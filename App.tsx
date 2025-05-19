import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Array.from({ length: 30 }).map((_, i) => (
        <View key={i} style={styles.item}>
          <Text> Öge {i+1}</Text>
        </View>
      ))}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center'
  },
  item:{
    width:'90%',
    padding:20,
    marginBottom:12,
    backgroundColor:'#e0f7fa',
    borderRadius:12
  }
})