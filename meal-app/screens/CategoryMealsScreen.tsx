import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import MealItem from '../components/mealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

export interface CategoryMealsProps {}

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meal => {
    
    console.log(meal.categoryIds, catId, meal.categoryIds.indexOf(catId))
    return meal.categoryIds.indexOf(catId) >= 0

  })

  console.log(displayedMeals)

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id
            }
          })
        }}
      />
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item: any, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%', padding: 10}}
      />
    </View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMealsScreen;