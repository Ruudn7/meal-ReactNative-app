import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';
import { View, Text, StyleSheet } from 'react-native';

export interface CategoryMealsProps {}

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector(state => {
    return state.meals.filteredMeals;
  })

  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
 
  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.container}>
        <Text>
          There is no meals, check your filters
        </Text>
      </View>
    )
  }
  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default CategoryMealsScreen;