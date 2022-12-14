import { StatusBar, SafeAreaView } from 'react-native';
import React from 'react';

import { colors } from '../utils/colors';

export default function DefaultView({
  barStyle,
  statusbarBackgroundColor,
  backgroundColor,
  children,
  translucent,
}) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: backgroundColor ?? colors.white }}>
      <StatusBar
        barStyle={barStyle ?? 'dark-content'}
        backgroundColor={statusbarBackgroundColor ?? colors.white}
        translucent={translucent ?? false}
      />
      {children}
    </SafeAreaView>
  );
}
