import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';  // Import icons
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: 'white',
};

// Stack Navigator for Meals
const MealsStackNavigator = () => (
  <Stack.Navigator screenOptions={defaultStackNavOptions}>
    <Stack.Screen name="Categories" component={CategoriesScreen}  options={{title:"Các Loại"}}/>
    <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
    <Stack.Screen name="MealDetail" component={MealDetailScreen}  options={{title:"Chi Tiết Món"}}/>
  </Stack.Navigator>
);

// Bottom Tab Navigator with icons
const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Meals') {
          iconName = focused ? 'restaurant' : 'restaurant-outline';
        } else if (route.name === 'Favorites') {
          iconName = focused ? 'star' : 'star-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: Colors.accentColor,
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Meals" component={MealsStackNavigator}  options={{title:"Tổng Hợp"}} />
    <Tab.Screen name="Favorites" component={FavoritesScreen}  options={{title:"Yêu Thích"}}/>
    <Tab.Screen name="Settings" component={SettingsScreen}  options={{title:"Cài Đặt"}}/>
  </Tab.Navigator>
);

// Drawer Navigator
const MainNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Meals" component={BottomTabNavigator} options={{title: "Món Mặn"}}/>
  </Drawer.Navigator>
);

export default MainNavigator;
