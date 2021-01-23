import React, { useState } from 'react';
import { View } from 'react-native';

import { ColorWheel } from '../../components';

import styles from './styles';

const Home = () => {
  const initialColor = '#ffffff'
  const [activeColor, setActiveColor] = useState(initialColor);

  return (
    <View style={[styles.Container, { backgroundColor: activeColor }]}>
      <View style={styles.Picker}>
        <ColorWheel
          onChange={color => console.log('ALEXDEBUG: color', color)}
          onChangeComplete={setActiveColor}
          activeColor={activeColor}
        />
      </View>
    </View>
  )
};

export default Home;
