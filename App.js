import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import Item from './components/Item'
import { cats } from './breeds'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList 
          data={cats}
          renderItem={({ item, index }) => {
            return <Item index={index} dats={item}/>
          }}
          keyExtractor={item => item.breed}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 50,
    color: 'tomato',
    fontWeight: 'bold'
  }
});
