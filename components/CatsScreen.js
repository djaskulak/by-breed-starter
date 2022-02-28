import * as React from 'react'
import { View, FlatList, StyleSheet, Button } from 'react-native'

import { cats } from './breeds'
import Cell from './Cell'

export default function CatsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cats}
        renderItem={({ item, index }) => {
          return (
            <Cell 
              title={item.breed} 
              showDetails={() => navigation.navigate('Details', { item })}
            />
          )
        }}
        keyExtractor={(item) => item.breed}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 1
  },
  list: {
    flex: 1,
    width: '100%'
  }
});