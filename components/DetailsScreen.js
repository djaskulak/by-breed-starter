import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import FeatureView from './FeatureView';

export default function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { item } = route.params;
  const keys = Object.keys(item).filter(key => key !== 'breed')

  return (
    <View style={styles.details}>
      <Text style={styles.detailsText}>{item.breed}</Text>

      {keys.map(key => <FeatureView name={key} value={item[key]}/>)}

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Cats"
        onPress={() => navigation.navigate('CatsScreen')}
      />
      <Button
        title="Go to Dogs"
        onPress={() => navigation.navigate('DogsScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  detailsText: {
    fontSize: 30
  }
})