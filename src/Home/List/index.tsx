import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import Styles from './styles';
import EachItem from './EachItem';
import Summary from '../Summary';

const List = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
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
    setIsLoading(false);
  }, [])

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetch('https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/');
      const json = await data.json();
      const { userHolding } = json.data;
      calculateFinalData(userHolding);
    } catch (error: any) {
      setIsLoading(false);
      setError('Error fetching data - ' + error.message);
    }
  }, [setIsLoading, setError, calculateFinalData]);

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

  const renderFooter = useCallback(() => {
    if (isLoading) return <ActivityIndicator style={Styles.loader} size='large' color="#000" />;

    if (error !== '') return <Text style={Styles.errorText}>{error}</Text>;
  }, [error, isLoading]);

  return (
    <View style={Styles.container}>
      <FlatList
        refreshing={isLoading}
        onRefresh={fetchData}
        data={data}
        contentContainerStyle={Styles.flatList}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        keyExtractor={keyExtractor} />
      <Summary
        summaryData={summaryData} />
    </View>
  );
};

export default React.memo(List);
