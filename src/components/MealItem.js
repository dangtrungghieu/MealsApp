import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MealItem = ({ title, imageUrl, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.mealItem}>
      <View style={styles.mealContainer}>
        <Image source={{ uri: imageUrl }} style={styles.mealImage} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  mealContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealImage: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    padding: 10,
    backgroundColor: 'rgb(255, 140, 0)',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default MealItem;
