import React from 'react' 
import { View, Text } from 'react-native'

export default function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data)
  
  return (
    <View>
      <Text>{index}: {breed}</Text>
    </View>
  )
}

// const styles = StyleSheet.create({
//   items: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });