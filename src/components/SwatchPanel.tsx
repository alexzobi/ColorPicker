import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Swatch from './Swatch';

type Props = {
  activeColor: string;
  onSwatchPress: (color: string) => void;
}

const SwatchPanel = ({
  activeColor,
  onSwatchPress,
}: Props) => {
  const initialColorHistory = [
    activeColor,
    activeColor,
    activeColor,
    activeColor,
    activeColor,
  ];
  const [colorHistory, setColorHistory] = useState(initialColorHistory);
  const onChangeComplete = () => {
    const newHistory = [activeColor, ...colorHistory].slice(0,5);

    setColorHistory(newHistory);
  }

  useEffect(() => { onChangeComplete(); }, [activeColor]);

  return (
    <View style={styles.Container}>
    {
      colorHistory.map((color, idx) => (
        <Swatch
          key={`Swatch_${color}_${idx}`}
          onPress={onSwatchPress}
          color={color}
        />
      ))
    }
    </View>
  )
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
})

export default SwatchPanel;
