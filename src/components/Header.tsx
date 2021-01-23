import React from 'react';
import {
  GestureResponderEvent,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import ArrowLeft from '../assets/arrow_left.svg';

type Props = {
  onPress: (e: GestureResponderEvent) => void;
  color: string;
  mb: number;
}

const Component = ({
  onPress,
  color,
  mb,
}: Props) => (
  <TouchableOpacity style={{ marginBottom: mb }} onPress={onPress}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <ArrowLeft
        height={20}
        width={20}
        stroke={color}
        style={{
          marginRight: 25,
        }}
      />
      <Text style={{ color, fontSize: 18, fontWeight: '600' }}>
        New Color
      </Text>
    </View>
  </TouchableOpacity>
);

export default Component;
