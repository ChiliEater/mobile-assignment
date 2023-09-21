import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from './Colors';

type TopBarProps = {
    test: string;
}

const TopBar = (props: TopBarProps) => {
  return (
  <View style={styles.container}>
    <Text>Test wow {props.test}</Text>
  </View>
)};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: Colors.level1,
        color: Colors.white,
    },
});

export default TopBar;