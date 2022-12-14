import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';

import DefaultText from './DefaultText';
import { colors } from '../utils/colors';

export default function Button({
  title,
  titleColor,
  titleFontSize,
  titleStyle,
  containerStyle,
  contentContainerStyle,
  onPress,
  rippleColor,
}) {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: rippleColor ?? colors.white }}>
        <View style={[styles.contentContainer, { ...contentContainerStyle }]}>
          <DefaultText
            title={title}
            color={titleColor ?? colors.white}
            fontSize={titleFontSize ?? 14}
            {...titleStyle}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: colors.blue,
    alignSelf: 'flex-start',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.blue,
  },
  contentContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
});
