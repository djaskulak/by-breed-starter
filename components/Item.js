import React from 'react' 
import { StyleSheet, View, Text } from 'react-native'
import Feature from './Feature'

export default function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data).filter(key => key !== 'breed')

  const average = (keys.reduce((acc, key) => {
    return acc + data[key]
  }, 0) / keys.length).toFixed(1)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{index}: {breed} {average}</Text>
      {keys.map(key => <Feature name={key} value={data[key]} />)}
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