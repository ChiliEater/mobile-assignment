import React, { useContext } from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';
import { NavigationContext } from './Home';

type FooterProps = {
    children: React.ReactNode,
}

const Footer = (props: FooterProps) => {
    const navigation = useContext(NavigationContext) as any;
  return (
  <View style={styles.container}>
    <Pressable onTouchEnd={() => navigation.navigate("Copyright")}>
    <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  </View>
)};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: Colors.level0,
        padding: 30,
        paddingBottom: 70,
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