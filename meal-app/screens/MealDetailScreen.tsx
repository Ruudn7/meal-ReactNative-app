import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

 export interface MealDetailProps {}

const MealDetailScreen = (props) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealDetailScreen;