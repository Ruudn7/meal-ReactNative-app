import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Colors from '../constans/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Ionicons } from '@expo/vector-icons';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs' ;

const defaulStackOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ?  Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ?  'white' : Colors.primaryColor
}

const MealNavigator =  createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions : defaulStackOptions
});


const FavNavigator = createStackNavigator ({
    Favourites: FavoritesScreen, 
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaulStackOptions

})

const tabScreenConfig =   {
    Meals: { screen: MealNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.primaryColor
    }},
    Favourites: { screen: FavNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.accentColor 
    }}
}

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(
        tabScreenConfig,
        {
            shifting: true,
            activeTintColor: Colors.accentColor,
                
        }
    ) :  createBottomTabNavigator(
        tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    }
)

export default createAppContainer(MealsFavTabNavigator);