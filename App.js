import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login_Screen from './screens/Login_Screen';
import Home_Screen from './screens/Home_Screen';
import Calendar_Screen from './screens/Calendar_Screen';
import Todotasks_Screen from './screens/Todotasks_Screen';
import TodoList from './screens/TodoList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = {{ headerShown: false }} name="Login" component={Login_Screen} />
        <Stack.Screen name="Home" component={Home_Screen} />
        <Stack.Screen name="Calendar" component={Calendar_Screen} />
        <Stack.Screen name="Todotasks" component={Todotasks_Screen} />
        <Stack.Screen name="TodoList" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
