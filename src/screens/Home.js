import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';

import DefaultView from '../components/DefaultView';
import Button from '../components/Button';
import Distance from '../components/Distance';
import HomeCard from '../components/HomeCard';
import { colors } from '../utils/colors';
import data from '../data/data.json';

export default function Home() {
  const [posts, setPosts] = React.useState(data);

  const handleLike = id => {
    const updatedPosts = [...posts];
    const foundIndex = updatedPosts.findIndex(item => item.id === id);
    updatedPosts[foundIndex].like = updatedPosts[foundIndex].like + 1;
    setPosts(updatedPosts);
  };

  const handleDislike = id => {
    const updatedPosts = [...posts];
    const foundIndex = updatedPosts.findIndex(item => item.id === id);
    updatedPosts[foundIndex].like =
      updatedPosts[foundIndex].like === 0
        ? 0
        : updatedPosts[foundIndex].like - 1;
    setPosts(updatedPosts);
  };

  const handleLikeAll = () => {
    const updatedPosts = [...posts];
    updatedPosts.map((item, key) => {
      updatedPosts[key].like = updatedPosts[key].like + 1;
    });
    setPosts(updatedPosts);
  };

  const handleDislikeAll = () => {
    const updatedPosts = [...posts];
    updatedPosts.map((item, key) => {
      updatedPosts[key].like =
        updatedPosts[key].like === 0 ? 0 : updatedPosts[key].like - 1;
    });
    setPosts(updatedPosts);
  };

  const handleReset = () => {
    const updatedPosts = [...posts];
    updatedPosts.map((item, key) => {
      updatedPosts[key].like = 0;
    });
    setPosts(updatedPosts);
  };

  return (
    <DefaultView
      backgroundColor={colors.screen}
      statusbarBackgroundColor={colors.screen}>
      <View style={styles.buttons}>
        <Button title="Like All" onPress={handleLikeAll} />
        <Distance width={10} />
        <Button
          title="Reset All"
          containerStyle={{
            backgroundColor: colors.white,
            borderColor: colors.grey,
          }}
          titleColor={colors.greyTwo}
          rippleColor={colors.grey}
          onPress={handleReset}
        />
        <Distance width={10} />
        <Button
          title="Dislike All"
          containerStyle={{
            backgroundColor: colors.red,
            borderColor: colors.red,
          }}
          onPress={handleDislikeAll}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <HomeCard
            item={item}
            handleLike={handleLike}
            handleDislike={handleDislike}
          />
        )}
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
  },
});
