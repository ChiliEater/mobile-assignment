import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';

type FooterProps = {
    children: React.ReactNode,
}

const Footer = (props: FooterProps) => {
  return (
  <View style={styles.container}>
    <Text style={styles.text}>{props.children}</Text>
  </View>
)};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: Colors.level0,
        padding: 30,
        alignItems: "center",
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '100%',
    },
    text: {
        textAlign: 'center',
        color: Colors.text0,
        fontSize: 15,
    },
});

export default Footer;