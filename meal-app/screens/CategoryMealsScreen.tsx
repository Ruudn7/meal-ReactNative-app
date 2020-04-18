import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface CategoryMealsProps {}

const CategoryMealsScreen = (props: CategoryMealsProps) => {
  return (
    <View style={styles.container}>
      <Text> The Category Meals Screen </Text>
    </View>
  );
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