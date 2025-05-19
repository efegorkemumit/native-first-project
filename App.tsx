import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const { height, width } = Dimensions.get("window")
  return (
    <>
      <View style={styles.container}>

        <Image
          source={require('./assets/bg.jpg')}
          style={styles.image}
        />

        <Image
          source={{ uri: 'https://efegorkemumit.com/_next/image?url=%2Fimages%2Fporftolio2025.png&w=1080&q=75' }}
          style={styles.image}
        />

        <ImageBackground
          source={require('./assets/bg.jpg')}
          style={[styles.bg, {width:width, height:height * 0.2}]}

        >
            <Text style={styles.text}>Text 123</Text>

        </ImageBackground>


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
