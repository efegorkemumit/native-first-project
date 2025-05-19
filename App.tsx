import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
      {Array.from({ length: 30 }).map((_, i) => (
        <View key={i} style={styles.box}>
          <Text style={styles.letter}> Öge {i + 1}</Text>
        </View>
      ))}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    marginTop:50
  },
  box: {
    width: 100,
    height: 100,
    marginRight: 12,
    backgroundColor: '#ffe0b2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12

  },
  letter: {
    fontSize: 24,
    fontWeight: "800",
    color: '#e65100',

  }
})