import { Text } from 'react-native';
import React from 'react';

import { colors } from '../utils/colors';

export const fontWeight = {
  100: '100',
  200: '200',
  300: '300',
  400: '400',
  500: '500',
  600: '600',
  700: '700',
  800: '800',
  900: '900',
  bold: 'bold',
  normal: 'normal',
};

export default function DefaultText({
  title,
  fontSize,
  color,
  numberOfLines,
  children,
  onPress,
  fontWeight,
  ...otherStyles
}) {
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={{
        fontWeight: fontWeight ?? 'normal',
        fontSize: fontSize ?? 14,
        color: color ?? colors.black,
        ...otherStyles,
      }}>
      {title}
      {children && children}
    </Text>
  );
}
