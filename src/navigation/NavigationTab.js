import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // importa el set de íconos que desees

import HomeScreen from "../screen/HomeScreen";
import SImpleScreen from "../screen/SImpleScreen";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Regla de 3 Simple" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Simple',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Regla de 3 Compuesta" 
        component={SImpleScreen}
        options={{
          tabBarLabel: 'Compuesta',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bank" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
