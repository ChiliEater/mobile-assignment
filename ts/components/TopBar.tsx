import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';

const TopBar = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.title}>B. B. B.</Text>
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
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: Colors.text0,
        margin: 0,
        padding: 0,
    },
    burger: {
        marginLeft: "auto",
        color: Colors.text0,
        fontSize: 40,
    }
});

export default TopBar;