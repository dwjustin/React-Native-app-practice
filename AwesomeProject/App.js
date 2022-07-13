import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { ScrollView } from 'react-native-web';

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

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./image/frog.png')}/>
        <Text>Hello I am a Frog!</Text>
        <StatusBar style="auto" />
        
      </View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
           name="Home"
           component={HomeScreen}
           options={{title: 'Welcome'}}/>
           <Stack.Screen
           name="Profile"
           component={ProfileScreen}
           />
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
  }
});
