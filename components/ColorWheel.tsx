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

  return (
    <View style={{ height: '50%' }}>
      {/* <View style={{ padding: 20, backgroundColor: activeColor, opacity: .75}}> */}
        <ColorPicker
          ref={picker}
          color={activeColor}
          swatches={false}
          onColorChange={onChange}
          onColorChangeComplete={onChangeComplete}
          thumbSize={20}
          sliderSize={0}
          noSnap={true}
          row={false}
        />
      {/* </View> */}
    </View>
    // <SomeButton onPress={() => this.picker.revert()} />
  )
};

export default ColorWheel;