import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button
        title='Modal Aç'
        onPress={() => setVisible(true)}
      />
      <Modal
        transparent
        animationType='slide'
        visible={visible}
        onRequestClose={() => setVisible(false)}

      >
        <View style={styles.backdrop}>

          <Text> Merhaba!</Text>
          <Button
            title='Modal Kapat'
            onPress={() => setVisible(false)}
          />


        </View>

      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backdrop: {
    flex: 1,
    backgroundColor: "#fefefe",
    justifyContent: "center",
    alignItems: "center"
  }
})