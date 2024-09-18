import React, { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

  const category = CATEGORIES.find(cat => cat.id === categoryId);
  const categoryTitle = category ? category.title : 'Meals';

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation, categoryTitle]);

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelect={() => {
          navigation.navigate('MealDetail', { mealId: itemData.item.id });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
});

export default CategoryMealsScreen;
