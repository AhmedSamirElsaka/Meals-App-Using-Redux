import { View } from "react-native";

import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  // const displayedMeals = MEALS.filter((mealItem) => {
  //   return mealItem.categoryIds.indexOf(catId) >= 0;
  // });

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <View style={{ flex: 1 }}>
      <MealsList items={displayedMeals} navigation={navigation} />
    </View>
  );
  //   const displayedMeals = MEALS.filter((mealItem) => {
  //     return mealItem.categoryIds.indexOf(catId) >= 0;
  //   });

  //   function renderMealItem(itemData) {
  //     const item = itemData.item;

  //     const mealItemProps = {
  //       id: item.id,
  //       title: item.title,
  //       imageUrl: item.imageUrl,
  //       affordability: item.affordability,
  //       complexity: item.complexity,
  //       duration: item.duration,
  //     };
  //     return <MealItem {...mealItemProps} />;
  //   }

  //   return (
  //     <View style={styles.container}>
  //       <FlatList
  //         data={displayedMeals}
  //         keyExtractor={(item) => item.id}
  //         renderItem={renderMealItem}
  //       />
  //     </View>
  //   );
  // }

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     padding: 16,
  //   },
  // });
}
export default MealsOverviewScreen;
