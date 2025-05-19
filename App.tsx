import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const {height, width} = Dimensions.get("window")
  return (
    <>
      <View style={styles.container}>
        <Text style={{color:"#007AFF"}}>Open up App.tsx to start working on your app!</Text>
        <Text style={styles.title}>Open up App.tsx to start working on your app!</Text>
        <Text>Ekran Genişliği: {Math.round(width)} px</Text>
      <Text>Ekran Yüksekliği: {Math.round(height)} px</Text>

      <Text style={{borderWidth:2, width:width*0.9, height:height*0.2, fontSize:width>400 ? 24:16}}>Test</Text>


        <StatusBar style="auto" />
      </View>


    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'#003AFF',
    fontWeight:"900",
    fontSize:36
  }
});
