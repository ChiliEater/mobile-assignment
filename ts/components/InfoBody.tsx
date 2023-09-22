import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

type InfoBodyProps = {
    children: React.ReactNode,
}

const InfoBody = (props: InfoBodyProps) => {
  return (
  <View style={styles.container}>
    {props.children}
  </View>
)};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: Colors.level1,
        padding: 40,
        gap: 40,
        alignItems: "center",
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
});

export default InfoBody;