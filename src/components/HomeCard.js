import { Image, Pressable, StyleSheet, View } from 'react-native';
import React, { memo, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../utils/colors';
import Button from './Button';
import Distance from './Distance';
import HomeModal from './HomeModal';
import { updatePost } from '../store/post';

const HomeCard = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const [currentItem, setCurentItem] = React.useState(props.item);
  const [showModal, setShowModal] = React.useState(false);

  useImperativeHandle(ref, () => ({
    handleLike() {
      handleLike();
    },
    handleDislike() {
      handleDislike();
    },
  }));

  const handleLike = () => {
    setCurentItem({
      ...currentItem,
      like: currentItem.like + 1,
    });
    // dispatch(updatePost('like', item));
  };

  const handleDislike = () => {
    if (currentItem.like !== 0) {
      setCurentItem({ ...currentItem, like: currentItem.like - 1 });
      // dispatch(updatePost('dislike', item));
    }
  };

  console.log('home card render');

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

      {showModal && (
        <HomeModal
          show={showModal}
          hide={() => setShowModal(false)}
          item={currentItem}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />
      )}
    </>
  );
});

// const HomeCard = ({ item }) => {
//   const dispatch = useDispatch();

//   const [currentItem, setCurentItem] = React.useState(item);
//   const [showModal, setShowModal] = React.useState(false);

//   const handleLike = () => {
//     setCurentItem({
//       ...currentItem,
//       like: currentItem.like + 1,
//     });
//     dispatch(updatePost('like', item));
//   };

//   const handleDislike = () => {
//     if (currentItem.like !== 0) {
//       setCurentItem({ ...currentItem, like: currentItem.like - 1 });
//       dispatch(updatePost('dislike', item));
//     }
//   };

//   console.log('home card render');

//   return (
//     <>
//       <Pressable style={styles.container} onPress={() => setShowModal(true)}>
//         <Image
//           source={{ uri: currentItem.image }}
//           resizeMode="cover"
//           style={styles.image}
//         />
//         <View style={styles.content}>
//           <Button
//             title={`${currentItem.like} ${
//               currentItem.like > 1 ? 'Likes' : 'Like'
//             }`}
//             containerStyle={{
//               backgroundColor: colors.white,
//               borderColor: colors.grey,
//             }}
//             contentContainerStyle={{
//               paddingVertical: 7,
//               paddingHorizontal: 15,
//             }}
//             titleColor={colors.greyTwo}
//             rippleColor={colors.grey}
//           />
//           <Distance flex={1} />
//           <Button
//             title="Like"
//             contentContainerStyle={{
//               paddingVertical: 7,
//               paddingHorizontal: 20,
//             }}
//             onPress={handleLike}
//           />
//           <Distance width={10} />
//           <Button
//             title="Dislike"
//             containerStyle={{
//               backgroundColor: colors.red,
//               borderColor: colors.red,
//             }}
//             contentContainerStyle={{
//               paddingVertical: 7,
//               paddingHorizontal: 15,
//             }}
//             onPress={handleDislike}
//           />
//         </View>
//       </Pressable>

//       {showModal && (
//         <HomeModal
//           show={showModal}
//           hide={() => setShowModal(false)}
//           item={currentItem}
//           handleLike={handleLike}
//           handleDislike={handleDislike}
//         />
//       )}
//     </>
//   );
// };

export default memo(HomeCard);

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
