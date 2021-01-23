import React from 'react';
import { Dimensions } from 'react-native';
// @ts-ignore library not typed
import { ColorWheel as RNColorWheel} from 'react-native-color-wheel';

type Props = {
  onChange: (color: string) => void;
  onChangeComplete: (color: string) => void;
}

const ColorWheel = ({
  onChange,
  onChangeComplete,
}: Props) => (
  <RNColorWheel
    initialColor="#ee0000"
    onColorChange={onChange}
    onColorChangeComplete={onChangeComplete}
    style={{width: Dimensions.get('window').width}}
    thumbStyle={{ height: 30, width: 30, borderRadius: 30}}
  />
);

export default ColorWheel;