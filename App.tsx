import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const { height, width } = Dimensions.get("window")

  const  showAlert =()=>{
    Alert.alert(
      "Bilgi",
      "Bu Bir Bilgi",
      [
        {text:'iptal'},
        {text:'Devam Et', onPress:()=>console.log('Devam Et Tıklandı')}
      ]
    )
  }

  return (
    <>
      <View style={styles.container}>

       <Button title='Uyarı Göster' onPress={showAlert}/>


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
  title: {
    color: '#003AFF',
    fontWeight: "900",
    fontSize: 36
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 20
  },
  text:{
    color:"#fff",
    fontSize:20,
    fontWeight:"700",
    paddingHorizontal:8,
    paddingVertical:4

  },
  bg:{
  
    justifyContent:'center',
    alignItems:'center'
  }
});
