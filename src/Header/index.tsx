import React from 'react';
import { Text, View } from 'react-native';

import Styles from './styles';

type Props = {};

const Header = (props: Props) => {
  const { } = props;
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Upstox holding</Text>
    </View>
  );
};

export default React.memo(Header);
