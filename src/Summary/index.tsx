import React, { useCallback, useEffect } from 'react';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withSpring, } from 'react-native-reanimated';
import { Text, TouchableOpacity, View } from 'react-native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

import Styles from './styles';

type Props = {
  summaryData: SummaryData
};


const Summary = (props: Props) => {
  const { summaryData } = props
  const [summaryActive, setSummaryActive] = React.useState(false);
  const animatedValue = useSharedValue(0)


  const animatedStyle = useAnimatedStyle(() => {
    const height = interpolate(animatedValue.value, [0, 1], [60, 160], Extrapolation.CLAMP);
    return {
      height
    }
  }, []);

  const animatedSummaryStyle = useAnimatedStyle(() => {
    const height = interpolate(animatedValue.value, [0, 1], [0, 120], Extrapolation.CLAMP);
    const paddingBottom = interpolate(animatedValue.value, [0, 1], [0, 30], Extrapolation.CLAMP);
    const opacity = interpolate(animatedValue.value, [0.7, 1], [0, 1], Extrapolation.CLAMP);

    return {
      paddingBottom,
      height,
      opacity
    }
  }, [])

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

  return (
    <AnimatedTouchableOpacity onPress={toggleSummary} activeOpacity={1} style={[Styles.container, animatedStyle]}>
      <Animated.View style={animatedSummaryStyle}>
        <View style={Styles.triangle} />
        <View style={Styles.eachRow}>
          <View style={Styles.rightColumn}>
            <Text style={Styles.title}>Current Value: </Text>
          </View>
          <View style={Styles.leftColumn}>
            <Text style={Styles.info}>₹{summaryData.sumOfAllCurrentValue.toFixed(2)}</Text>
          </View>
        </View>
        <View style={Styles.eachRow}>
          <View style={Styles.rightColumn}>
            <Text style={Styles.title}>Total investment: </Text>
          </View>
          <View style={Styles.leftColumn}>
            <Text style={Styles.info}>₹{summaryData.sumOfAllInvestment.toFixed(2)}</Text>
          </View>
        </View>
        <View style={Styles.eachRow}>
          <View style={Styles.rightColumn}>
            <Text style={Styles.title}>Today's Profit & Loss: </Text>
          </View>
          <View style={Styles.leftColumn}>
            <Text style={Styles.info}>₹{summaryData.todayPL.toFixed(2)}</Text>
          </View>
        </View>
      </Animated.View>
      <View style={Styles.eachRow}>
        <View style={Styles.rightColumn}>
          <Text style={Styles.title}>Profit & Loss: </Text>
        </View>
        <View style={Styles.leftColumn}>
          <Text style={Styles.info}>₹{summaryData.totalPL.toFixed(2)}</Text>
        </View>
      </View>
    </AnimatedTouchableOpacity>
  );
};

export default React.memo(Summary);
