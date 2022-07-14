
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack= createStackNavigator();

function MyStack(){
  return (
   
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>
  );
}


export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hello I am a Frog!</Text>
        <Text style={styles.desc1}>Play with me!</Text>
        <Image style={styles.image} source={require('./image/frog.png')}/>
        <TouchableOpacity onPress={MyStack} activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>Let's Go!</Text>
        </TouchableOpacity>
       
      </View>
    </View>

  )
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
    marginBottom: 30,
    width:300,
    height:200,
  },
  button:{
    backgroundColor:"orange",
    padding:20,
    width: 200,
    borderRadius:15,
    marginBottom: 30
    

  },
  buttonText:{
    textAlign: 'center',
    
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
