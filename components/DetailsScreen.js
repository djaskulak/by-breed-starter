import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { item } = route.params;
  const keys = Object.keys(item).filter(key => key !== 'breed')

  return (
    <View style={styles.details}>
      <Text style={styles.detailsText}>{item.breed}</Text>

      {keys.map(key => <Text>{key} : {item[key]}</Text>)}

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailsText: {
    fontSize: 30
  }
})