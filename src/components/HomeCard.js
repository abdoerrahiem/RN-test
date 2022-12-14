import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import Button from './Button';
import Distance from './Distance';

export default function HomeCard({ item, handleLike, handleDislike }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.content}>
        <Button
          title={`${item.like} ${item.like > 1 ? 'Likes' : 'Like'}`}
          containerStyle={{
            backgroundColor: colors.white,
            borderColor: colors.grey,
          }}
          contentContainerStyle={{
            paddingVertical: 7,
            paddingHorizontal: 15,
          }}
          titleColor={colors.greyTwo}
          rippleColor={colors.grey}
        />
        <Distance flex={1} />
        <Button
          title="Like"
          contentContainerStyle={{
            paddingVertical: 7,
            paddingHorizontal: 20,
          }}
          onPress={() => handleLike(item.id)}
        />
        <Distance width={10} />
        <Button
          title="Dislike"
          containerStyle={{
            backgroundColor: colors.red,
            borderColor: colors.red,
          }}
          contentContainerStyle={{
            paddingVertical: 7,
            paddingHorizontal: 15,
          }}
          onPress={() => handleDislike(item.id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 10,
    flexDirection: 'row',
  },
});
