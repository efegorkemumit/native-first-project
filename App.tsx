import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StaticBanner from './components/StaticBanner'
import UserBadge from './components/UserBadge'

export default function App() {

  const users = [
    { name: "Efe Görkem", avatar: "efegorkemumit.com" },
    { name: "Ayşe Ayşe", avatar: "ayseayse.com" },

  ]
  return (
    <View style={styles.container}>
      {users.map(( u, index) => (
        <View  key={index}>
        <UserBadge
          name={u.name}
          avatar={u.avatar}
        />
        </View>
      ))}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})