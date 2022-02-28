import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

export default function Cell({ title, showDetails }) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => showDetails}
      underlayColor="gray"
    >
      <Text style={styles.cellText}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  cellText: {
    fontSize: 20
  }
});