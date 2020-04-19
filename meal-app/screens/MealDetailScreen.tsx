import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>
                {props.item}
            </Text>
        </View>
    )
}

const MealDetailScreen = (props) => {

    const mealId= props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(el => {
                return <ListItem key={el} item={el} />
            })}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(el => {
                return <ListItem key={el} item={el} />
            })}
        </ScrollView>
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
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        height: 200
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;