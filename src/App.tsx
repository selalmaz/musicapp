import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

// json dosyası import
import music_data from './data.json';
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar';

function App() {
  const renderSong = ({item}: {item: any}) => (
    <SongCard props={item}></SongCard>
  );
  const renderSeperator = () => <View style={style.seperator}></View>;
  // aradaki cizgiyi yapmak icin

  const [list, setList] = useState(music_data); // init degeri müzik data si olucak
  const HandleSearch = (text: string) => {
    console.log(text); // search bar

    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
      // -1 den büyükse return eder
      // index of calısma mantıgı :
      /*
        currentTitle nin icinde searcedText yoksa ise -1 döner 
        var ise index no sunu döner 
        */
    });

    setList(filteredList);
  };

  return (
    <SafeAreaView style={style.container}>
      <SearchBar onSearch={HandleSearch}></SearchBar>
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}></FlatList>
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
