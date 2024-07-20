import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

// json dosyası import

import music_data from './data.json';
import SongCard from './components/SongCard/SongCard';

function App() {
  const renderSong = ({item}: {item: any}) => (
    <SongCard props={item}></SongCard>
  );
  const renderSeperator = () => <View style={style.seperator}></View>;
  // aradaki cizgiyi yapmak icin

  return (
    <SafeAreaView style={style.container}>
      <View style={style.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={music_data}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}></FlatList>
      </View>
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
