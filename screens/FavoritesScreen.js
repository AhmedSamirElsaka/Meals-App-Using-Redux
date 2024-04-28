import MealsList from "../mealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { View, StyleSheet, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
function FavoritesScreen({}) {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = favoriteMealsCtx.ids;

  const displayedMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>You have no Favorite Meals</Text>
      </View>
    );
  }
  return <MealsList items={displayedMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
});
