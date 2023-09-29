import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';
import CyclicText from './CyclicText';

const TopBar = () => {
  return (
  <View style={styles.container}>
    <CyclicText style={styles.cyclicText} colors={Colors.textColors()} textStyle={styles.title}>B. B. B.</CyclicText>
    <Icon name="menu" style={styles.burger}></Icon>
  </View>
)};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        position: 'absolute',
        backgroundColor: Colors.level1,
        //height: 40,
        paddingBottom: 20,
        justifyContent: "flex-start",
        alignContent: 'center',
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        flexDirection: 'row',
        zIndex: 1,
        elevation: 1,
        width: ViewportUnits.vw(100),
    },
    cyclicText: {
        zIndex: 2,
        elevation: 2,
    },
    title: {
        fontSize: 40,
        fontWeight: '900',
    },
    burger: {
        marginLeft: "auto",
        color: Colors.text0,
        fontSize: 40,
    }
});

export default TopBar;