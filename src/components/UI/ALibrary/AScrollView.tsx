import React from 'react';
import { ScrollView } from 'react-native';
import { AStyle } from './AStack';

type AScrollViewType = {
  bounces?: boolean
  showsVerticalScrollIndicator?: boolean
  style?: AStyle
  children?: React.ReactNode
}

export default function AScrollView({
  bounces = true,
  showsVerticalScrollIndicator = true,
  style = null,
  children = null,
}: AScrollViewType) {
  return (
    <ScrollView
      bounces={bounces}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      style={{
        ...style,
      }}
    >
      {children}
    </ScrollView>
  );
}
