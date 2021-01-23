import React from 'react';
import { View } from 'react-native';
// @ts-ignore library not typed
import ColorPicker from './react-native-wheel-color-picker';

type Props = {
  onChangeComplete: (color: string) => void;
  activeColor: string;
  onChange?: (color: string) => void;
}

const ColorWheel = ({
  onChange,
  onChangeComplete,
  activeColor,
}: Props) => (
  <View style={{ height: '50%' }}>
    <ColorPicker
      color={activeColor}
      swatches={false}
      onColorChange={onChange}
      onColorChangeComplete={onChangeComplete}
      thumbSize={20}
      sliderSize={10}
      noSnap={true}
      row={false}
    />
  </View>
);

export default  ColorWheel;