import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Colors from '../constans/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const defaulStackOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ?  Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ?  'white' : Colors.primaryColor
}

const MealNavigator =  createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetail: MealDetailScreen,
    }, {
        defaultNavigationOptions : defaulStackOptions
    }
);


const FavNavigator = createStackNavigator (
    {
        Favourites: FavoritesScreen, 
        MealDetail: MealDetailScreen
    }, {
        defaultNavigationOptions: defaulStackOptions
    }
)

const FiltersNavigator = createStackNavigator(
    {
        Fitlers: FiltersScreen,
    }, {
        defaultNavigationOptions: defaulStackOptions
    }
)

const tabScreenConfig =   {
    Meals: { screen: MealNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.primaryColor,
        tabBarLable: <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>
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
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.accentColor
        }
    },
);

const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'  
        }
    }, 
    FiltersDrawer: {
        screen: FiltersNavigator,
        navigationOptions: {
            drawerLabel: 'Filters'  
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    },
    drawerBackgroundColor: 'white',
    overlayColor: 'rgba(0,0,0,0.7)'
    
});

export default createAppContainer(MainNavigator);