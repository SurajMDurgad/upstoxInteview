import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import Styles from './styles';
import EachItem from './EachItem';
import Summary from '../Summary';

type Props = {
};

const Home = (props: Props) => {

  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    if (data.length === 0) {
      const data = await fetch('https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/');
      const json = await data.json();
      const { userHolding } = json.data;
      setData(userHolding);
    }
  }, [])

  // onMount
  useEffect(() => {
    fetchData();
  }, []);

  const keyExtractor = useCallback((item: Item) => item.symbol, []);


  const renderItem = useCallback(({ item }: { item: Item }) => {
    return (
      <EachItem
        key={item.symbol}
        item={item} />
    )
  }, [])

  const { } = props;
  return (
    <View style={Styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={Styles.flatList}
        renderItem={renderItem}
        keyExtractor={keyExtractor} />
      <Summary
        data={data} />
    </View>
  );
};

export default React.memo(Home);
