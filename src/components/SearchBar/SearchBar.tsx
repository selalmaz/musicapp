import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = (props: any) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." onChangeText={props.onSearch}></TextInput>
    </View>
  );
};

export default SearchBar;
