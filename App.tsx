import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={{color:"#007AFF"}}>Open up App.tsx to start working on your app!</Text>
        <Text style={styles.title}>Open up App.tsx to start working on your app!</Text>

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
