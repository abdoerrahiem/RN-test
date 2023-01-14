import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DefaultView from '../components/DefaultView';
import Button from '../components/Button';
import Distance from '../components/Distance';
import HomeCard from '../components/HomeCard';
import { colors } from '../utils/colors';
import { updatePosts } from '../store/post';

export default function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.postReducer);

  const childRef = React.useRef();

  return (
    <DefaultView
      backgroundColor={colors.screen}
      statusbarBackgroundColor={colors.screen}>
      <View style={styles.buttons}>
        <Button
          title="Like All"
          onPress={() => {
            dispatch(updatePosts('like'));
            // handleLikeAll();
            childRef?.current?.handleLike();
          }}
        />
        <Distance width={5} />
        <Button
          title="Reset All"
          containerStyle={{
            backgroundColor: colors.white,
            borderColor: colors.grey,
          }}
          titleColor={colors.greyTwo}
          rippleColor={colors.grey}
          onPress={() => {
            dispatch(updatePosts('reset'));
          }}
        />
        <Distance width={5} />
        <Button
          title="Dislike All"
          containerStyle={{
            backgroundColor: colors.red,
            borderColor: colors.red,
          }}
          onPress={() => {
            dispatch(updatePosts('dislike'));
          }}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <HomeCard ref={childRef} item={item} />}
        contentContainerStyle={{ padding: 10 }}
      />
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
