import { Image, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import Button from './Button';
import Distance from './Distance';
import HomeModal from './HomeModal';

const HomeCard = ({ item }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState(item);

  const handleLike = () => {
    const updatedItem = { ...currentItem };
    updatedItem.like = updatedItem.like + 1;
    setCurrentItem(updatedItem);
  };

  const handleDislike = () => {
    const updatedItem = { ...currentItem };
    updatedItem.like = updatedItem.like === 0 ? 0 : updatedItem.like - 1;
    setCurrentItem(updatedItem);
  };

  return (
    <>
      <Pressable style={styles.container} onPress={() => setShowModal(true)}>
        <Image
          source={{ uri: currentItem.image }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.content}>
          <Button
            title={`${currentItem.like} ${
              currentItem.like > 1 ? 'Likes' : 'Like'
            }`}
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
            onPress={handleLike}
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
            onPress={handleDislike}
          />
        </View>
      </Pressable>

      <HomeModal
        show={showModal}
        hide={() => setShowModal(false)}
        item={currentItem}
        handleLike={handleLike}
        handleDislike={handleDislike}
      />
    </>
  );
};

export default HomeCard;

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
