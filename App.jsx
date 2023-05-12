import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Todos from './components/Todos';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from "native-base";

const CompletedTodos = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        List of all completed todos
      </Text>
    </View>
  );
}

function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Todos" component={Todos} />
          <Tab.Screen name="Completed" component={CompletedTodos} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
