import React from 'react' 
import { StyleSheet, View, Text } from 'react-native'

export default function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data).filter(key => key != 'breed')

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{index}: {breed}</Text>
      {keys.map(key => <Text style={styles.detail}>{key} {data[key]}</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 1
  },
  label: {
    fontSize: 28
  },
  detail: {
    fontSize: 18
  }
});