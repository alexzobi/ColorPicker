import React, { useState } from 'react';
import { View } from 'react-native';

import { ColorWheel, SwatchPanel } from '../../components';

import styles from './styles';

const Home = () => {
  const initialColor = '#8162ff';
  const [activeColor, setActiveColor] = useState(initialColor);

  return (
    <View style={[styles.Container, { backgroundColor: activeColor }]}>
      <View style={styles.Picker__Shadow}>
        <View style={styles.Picker}>
          <View style={[ styles.TopBar, { backgroundColor: activeColor }]} />
          <View style={{ paddingHorizontal: 50, flexGrow: 1 }}>
            <ColorWheel
              onChange={color => console.log('ALEXDEBUG: color', color)}
              onChangeComplete={setActiveColor}
              activeColor={activeColor}
            />
          </View>
          <View
            style={[
              styles.BottomCircle,
              { backgroundColor: activeColor }
            ]}
          />
          <SwatchPanel
            activeColor={activeColor}
          />
        </View>
      </View>
    </View>
  )
};

export default Home;
