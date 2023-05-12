import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Todos from './components/Todos';
import store from './store';
import CompletedTodos from './components/CompletedTodos';
import TodosContainer from './components/TodosContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from "native-base";
import { Provider } from 'react-redux';

function App() {

  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Todos" component={TodosContainer} />
            <Tab.Screen name="Completed" component={CompletedTodos} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
