import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

 export interface MealDetailProps {}

const MealDetailScreen = (props) => {

    const mealId= props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.container}>
        <Text> The Meal Detail Screen </Text>
        <Button title='Back to Category' onPress={
            () => {
                props.navigation.popToTop();
            }
        } />
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {

    const mealId= navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favourite' iconName='ios-star' onPress={() => {
                    console.log('Marks as favourite')
                }} />
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealDetailScreen;