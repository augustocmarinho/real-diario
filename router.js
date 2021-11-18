import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from './screens/Home';
import MoneyInforms from './screens/MoneyInforms';
import MoneyGraph from './screens/MoneyGraph';
// End Screens

const Stack = createStackNavigator();

class Router extends React.Component {
  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
                cardStyle: { backgroundColor: "#F8F9FE" }
              }}
            />

            <Stack.Screen
              name="Informações da Moeda"
              component={MoneyInforms}
            />

            <Stack.Screen
              name="Gráfico da Moeda"
              component={MoneyGraph}
            />

          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}


export default Router;
