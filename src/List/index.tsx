import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import Styles from './styles';
import EachItem from './EachItem';
import Summary from '../Summary';

const Home = () => {

  const [data, setData] = useState<Item[]>([]);
  const [summaryData, setSummaryData] = useState<SummaryData>({
    totalPL: 0,
    sumOfAllCurrentValue: 0,
    sumOfAllInvestment: 0,
    todayPL: 0,
  });

  const calculateFinalData = useCallback((userHolding: Item[]) => {
    let sumOfAllCurrentValue = 0;
    let sumOfAllInvestment = 0;
    let todayPL = 0;
    userHolding.forEach((item: Item) => {
      sumOfAllCurrentValue += item.quantity * item.ltp;
      sumOfAllInvestment += item.quantity * item.avgPrice;
      todayPL += (item.close - item.ltp) * item.quantity
    });
    const totalPL = sumOfAllCurrentValue - sumOfAllInvestment;
    setSummaryData({
      totalPL,
      sumOfAllCurrentValue,
      sumOfAllInvestment,
      todayPL,
    });
    setData(userHolding);
  }, [])

  const fetchData = useCallback(async () => {
    if (data.length === 0) {
      const data = await fetch('https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/');
      const json = await data.json();
      const { userHolding } = json.data;
      calculateFinalData(userHolding);
    }
  }, [])

  const keyExtractor = useCallback((item: Item) => item.symbol, []);

  const renderItem = useCallback(({ item }: { item: Item }) => {
    return (
      <EachItem
        key={item.symbol}
        item={item} />
    )
  }, [])

  // onMount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={Styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={Styles.flatList}
        renderItem={renderItem}
        keyExtractor={keyExtractor} />
      <Summary
        summaryData={summaryData} />
    </View>
  );
};

export default React.memo(Home);
