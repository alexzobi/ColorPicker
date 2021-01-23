import React from 'react';
import { View } from 'react-native';
// @ts-ignore library not typed
import ColorPicker from './react-native-wheel-color-picker';
type Props = {
  onChange: (color: string) => void;
  onChangeComplete: (color: string) => void;
  activeColor: string;
}

const ColorWheel = ({
  onChange,
  onChangeComplete,
  activeColor,
}: Props) => {
  const picker = React.createRef<ColorPicker>();
  const slider = React.createRef<ColorPicker>();

  return (
    <View style={{ height: '50%' }}>
      <ColorPicker
        ref={picker}
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
  )
};

export default ColorWheel;