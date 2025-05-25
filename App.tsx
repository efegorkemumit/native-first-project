import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(()=>{

    const intervalId= setInterval(()=>{
      setSeconds(prev=> prev +1)
    }, 1000);

    return()=>clearInterval(intervalId)

  },[])


  return (
    <View style={styles.container}>
      <Button
        title='Azalt'
        onPress={()=>setCount(prev=>prev -1)}
      />
      <Text>
      Sayaç: {count}

      </Text>
      <Button
        title='Artır'
        onPress={()=>setCount(prev=>prev +1)}
      />

      <Text>
        {seconds}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})