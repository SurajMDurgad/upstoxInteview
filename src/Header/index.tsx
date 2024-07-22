import React from 'react';
import { Text, View } from 'react-native';

import Styles from './styles';

const Header = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Upstox holding</Text>
    </View>
  );
};

export default React.memo(Header);
