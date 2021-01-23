import React from 'react';
import { TouchableOpacity } from 'react-native';

type Props = {
  color: string;
  onPress: (color: string) => void;
}

const Swatch = ({
  color,
  onPress,
}: Props) => (
  <TouchableOpacity
    onPress={() => onPress(color)}
    style={{
      height: 40,
      width: 40,
      backgroundColor: color,
      borderRadius: 25,
      shadowColor: '#000',
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: .25,
      shadowRadius: 3,
    }}
  />
);

export default Swatch;
