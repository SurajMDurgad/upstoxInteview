import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Styles from './styles';

type Props = {
  item: Item,
  index: number,
  toggleBottomSheet: (index: number) => void
};

const EachItem = (props: Props) => {
  const { item, index, toggleBottomSheet } = props;
  const { symbol, quantity, ltp, avgPrice, close } = item;
  const pNl = ((ltp - avgPrice) * quantity).toFixed(2);

  const onPress = useCallback(() => {
    toggleBottomSheet(index);
  }, [index]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={Styles.eachRow}
      key={symbol}>
      <View style={Styles.firstColumn}>
        <Text style={Styles.symbol}>{symbol}</Text>
        <Text style={Styles.quantity}>{quantity}</Text>
      </View>
      <View style={Styles.secondColumn}>
        <Text style={Styles.quantity}>LTP: <Text style={Styles.boldText}>₹ {ltp}</Text></Text>
        <Text style={Styles.quantity}>P/L: <Text style={Styles.boldText}>₹ {pNl}</Text></Text>
      </View>
    </TouchableOpacity>
  )
};

export default React.memo(EachItem);
