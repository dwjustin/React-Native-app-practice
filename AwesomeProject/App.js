import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-web';



export default function App() {
  return (
    <ScrollView>
      
      <View style={styles.container}>
      <Image style={styles.image} source={require('./image/frog.png')}/>
        <Text>Hello I am a Frog!</Text>
        <StatusBar style="auto" />
        
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:200,
    height:200,
  }
});
