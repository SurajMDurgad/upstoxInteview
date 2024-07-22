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
  const [bottomSheetIndex, setBottomSheetIndex] = React.useState(-1);

  const toggleBottomSheet = useCallback((index: number) => {
    setBottomSheetIndex(index);
  }, [])

  const renderItem = useCallback(({ item, index }: { item: Item, index: number }) => {
    return (
      <EachItem
        key={item.symbol}
        item={item}
        toggleBottomSheet={toggleBottomSheet}
        index={index} />
    )
  }, [])

  const { } = props;
  return (
    <View style={Styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor} />
      <Summary
        data={data}
        toggleBottomSheet={toggleBottomSheet}
        index={bottomSheetIndex} />
    </View>
  );
};

export default React.memo(Home);
