import React, { useCallback, useEffect, useState } from 'react';
import { Modal, Text, View } from 'react-native';

import Styles from './styles';
import Header from './Header';
import List from './List';

const Home = () => {
  return (
    <View style={Styles.container}>
      <Header />
      <List />
    </View>
  );
};

export default React.memo(Home);
