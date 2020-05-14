import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignupScreen from './components/SignupPage';
import LoginScreen from './components/LoginPage';
import UserListPage from './components/UserListPage';
import EditUserScreen from './components/EditUserPage';
import AddUserScreen from './components/AddUserPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign up" component={SignupScreen} />
        <Stack.Screen name="Log in" component={LoginScreen} />
        <Stack.Screen name="List of Users" component={UserListPage} />
        <Stack.Screen name="Edit User" component={EditUserScreen} />
        <Stack.Screen name="Add User" component={AddUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
