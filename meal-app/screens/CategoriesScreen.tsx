import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import { Category } from '../models/Category';


const CategoriesScreen = props => {
  const renderGridItem = (itemData : Category) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={ () => {
          props.navigation.navigate(
            {
              routeName: 'CategoryMeals',
              params: {
                categoryId: itemData.item.id
              }
            }
          )
        }
      }
    />)
  }

  return (
    <FlatList
      keyExtractor={(item, title) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;