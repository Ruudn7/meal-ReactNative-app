import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from './mealItem';

const MealList = props => {
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
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item: any, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%', padding: 10}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});  

export default MealList;