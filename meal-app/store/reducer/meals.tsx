import { MEALS } from '../../data/dummy-data';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
} 

const mealReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_FAVORITE': {
            const existingIndex = state.favoriteMeals.findIndex((meal: any) => meal.id === action.mealId)
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex)
                return {
                    ...state,
                    favoriteMeals: updatedFavMeals
                }
            } else {
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(
                        state.meals.find(meal => meal.id === action.mealId)
                    )
                }
            }
        }
        default: {
            return state
        }
    }
    return state;
}

export default mealReducer;