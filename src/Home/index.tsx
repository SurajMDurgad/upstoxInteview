import React from 'react';
import { Text, View } from 'react-native';

import Styles from './styles';

type Props = {};

const Home = (props: Props) => {
  const { } = props;
  return (
    <View style={Styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default React.memo(Home);
