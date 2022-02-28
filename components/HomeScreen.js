import * as React from 'react'
import { View, StyleSheet, Button } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 1
  }
});