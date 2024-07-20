import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.styles';

const SongCard = ({props}: {props: any}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.imageUrl}}></Image>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.artist}>{props.artist}</Text>
            <Text style={styles.year}>{props.year}</Text>
          </View>
          {props.isSoldOut && (
            <View style={styles.soldOutContainer}>
              <Text style={styles.solOutTitle}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
