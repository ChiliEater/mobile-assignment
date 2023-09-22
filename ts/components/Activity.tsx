import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';

type ActivityProps = {
    children: React.ReactNode,
    title: string,
}

const Activity = (props: ActivityProps) => {
  return (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.description}>{props.children}</Text>
  </View>
)};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: ViewportUnits.vw(37.5),
        maxWidth: ViewportUnits.vw(40),
        height: ViewportUnits.vh(20),
        backgroundColor: Colors.level2,
        padding: 10,
        gap: 10,
        alignItems: "center",
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignSelf: 'center',
        borderRadius: 20,
    },
    title: {
        fontWeight: '600',
        color: Colors.text0,
        fontSize: ViewportUnits.vw(5),
        textAlign: 'center',
    },
    description: {
        color: Colors.text1,
        fontSize: ViewportUnits.vw(4),
        textAlign: 'center',
    }
});

export default Activity;