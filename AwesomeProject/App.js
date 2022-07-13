import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { ScrollView, Tab } from 'react-native-web';
import React from 'react';


const Stack=createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Frog's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Frog' })
      }
    />
  );
};


export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hello I am a Frog!</Text>
        <Text style={styles.desc1}>Play with me!</Text>
        <Image style={styles.image} source={require('./image/frog.png')}/>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F266A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:300,
    height:200,
  },
  button:{
    padding: 10,
    height: 400,
    width: 200

  },

  title:{
    fontSize:30,
    fontWeight:"700",
    color:"black",
    paddingLeft:30,
    paddingTop:100,
    paddingRight:30
  
  },

  desc1:{
    textAlign:"center",
    color: "#black",
    fontSize:20,
    fontWeight:"700",
    paddingLeft:22,
    paddingRight:22
  },
  textContainer:{
    width:300,
    height:500,
    backgroundColor:"#fff",
    marginTop:50,
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center"

  }

});
