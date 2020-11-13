import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import ClassifyImageScreen from "../screens/ClassifyImageScreen";
import DetectObjectsScreen from "../screens/DetectObjectsScreen";
import DetectFoodsScreen from "../screens/DetectFoodsScreen";
// import TabFiveScreen from "../screens/TabFiveScreen";

import {
  BottomTabParamList,
  // TabOneParamList,
  // TabTwoParamList
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-code" color={color} />
          ),
          tabBarLabel: "Intro",
        }}
      />
      <BottomTab.Screen
        name="ClassifyImage"
        component={ClassifyImageScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-git-network" color={color} />
          ),
          tabBarLabel: "Classify Image",
        }}
      />
      <BottomTab.Screen
        name="DetectObjects"
        component={DetectObjectsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-crop" color={color} />
          ),
          tabBarLabel: "Detect Objects",
        }}
      />
      <BottomTab.Screen
        name="DetectFoods"
        component={DetectFoodsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-pizza" color={color} />
          ),
          tabBarLabel: "Detect Foods",
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

/*
// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
*/
