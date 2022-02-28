import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function FeatureView({ name, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.featureText}>{name}</Text>
      <Text style={styles.featureText}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    margin: 10,
  },
  featureText: {
    fontSize: 20
  }
})