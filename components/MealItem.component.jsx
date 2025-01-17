import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import DefaultText from './DefaultText.component';

const MealItem = (props) => {
  const {
    title,
    duration,
    complexity,
    affordability,
    imageUrl,
    onSelectMeal,
  } = props;

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealHeader, ...styles.mealRow }}>
            <ImageBackground
              source={{ uri: imageUrl }}
              style={styles.bgImage}
              resizeMode='stretch'
            >
              <DefaultText style={styles.title}>{title}</DefaultText>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealDetail, ...styles.mealRow }}>
            <DefaultText numberOfLines={1}>{duration}m</DefaultText>
            <DefaultText numberOfLines={1}>
              {complexity.toUpperCase()}
            </DefaultText>
            <DefaultText numberOfLines={1}>
              {affordability.toUpperCase()}
            </DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '95%',
    backgroundColor: '#ccc',
    marginVertical: '3.5%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, length: 3 },
    shadowRadius: 10,
    elevation: 10,
    marginVertical: '3%',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: '3.5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: '1.5%',
    paddingHorizontal: '3.5%',
    textAlign: 'center',
  },
});

export default MealItem;
