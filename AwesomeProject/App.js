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
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

function Home(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Feed' component={Feed}/>
      <Tab.Screen name='Messages' component={Messages}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./image/frog.png')}/>
        <Text>Hello I am a Frog!</Text>
      
        
      </View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
           name="Home"
           component={Home}
           options={{headerShown: false}}/>
          {/* <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name='Settings' component={Settings}/>  */}
        </Stack.Navigator>
      </NavigationContainer>
      
      
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
  },
  button:{
    padding: 10,
    height: 400,
    width: 200

  }

});
