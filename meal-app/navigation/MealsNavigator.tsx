import { Platform } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Colors from '../constans/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealNavigator =  createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ?  Colors.primaryColor : ''
          },
          headerTintColor: Platform.OS === 'android' ?  'white' : Colors.primaryColor
    }
});

export default createAppContainer(MealNavigator);