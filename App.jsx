/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
  View,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const intialValues = [
  {
    id: 1,
    name: "Task 1"
  },
  {
    id: 2,
    name: "Task 2"
  },
  {
    id: 3,
    name: "Task 3"
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column', width: '100%', top: 20,
    alignItems: 'center'
  }
})

const Todos =  () => {
  const [ todos, setTodos ] = useState(intialValues);
  return (
    <View>
      <View style={styles.container}>
        {
          todos.map(item => (
              <View key={item.id} style={{width: '80%', height: 50, alignItems: 'center'}}>
                <Text style>{item.name}</Text>
              </View>
            ))
        }
      </View>
    </View>
  );
}

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
  const isDarkMode = useColorScheme() === 'dark';

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Todos" component={Todos} />
          <Tab.Screen name="Completed" component={CompletedTodos} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
