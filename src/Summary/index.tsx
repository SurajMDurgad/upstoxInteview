import React, { useCallback, useEffect } from 'react';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring, } from 'react-native-reanimated';
import { Text, TouchableOpacity, Modal, View } from 'react-native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

import Styles from './styles';

type Props = {
  data: Item[],
  index: number,
  toggleBottomSheet: (index: number) => void
};


const Summary = (props: Props) => {
  const [summaryActive, setSummaryActive] = React.useState(false);
  const animatedValue = useSharedValue(0)


  const animatedStyle = useAnimatedStyle(() => {
    const height = interpolate(animatedValue.value, [0, 1], [60, 160]);
    return {
      height
    }
  }, []);

  const toggleSummary = useCallback(() => {
    setSummaryActive(!summaryActive);
  }, [summaryActive]);

  useEffect(() => {
    if (summaryActive) {
      animatedValue.value = withSpring(1)
    } else {
      animatedValue.value = withSpring(0);
    }
  }, [summaryActive])

  const ltp = 10;
  const quantity = 10;

  const currentValue = (ltp * quantity).toFixed(2);

  return (
    <AnimatedTouchableOpacity onPress={toggleSummary} activeOpacity={1} style={[Styles.container, animatedStyle]} >
      <View style={Styles.eachRow}>
        <View style={Styles.rightColumn}>
          <Text style={Styles.title}>Current Value: </Text>
        </View>
        <View style={Styles.leftColumn}>
          <Text style={Styles.info}>₹{currentValue}</Text>
        </View>
      </View>
      <View style={Styles.eachRow}>
        <View style={Styles.rightColumn}>
          <Text style={Styles.title}>Total investment: </Text>
        </View>
        <View style={Styles.leftColumn}>
          <Text style={Styles.info}>₹{currentValue}</Text>
        </View>
      </View>
    </AnimatedTouchableOpacity>
  );
};

export default React.memo(Summary);
