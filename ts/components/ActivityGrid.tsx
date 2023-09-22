import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

type ActivityGridProps = {
    children: React.ReactNode,
}

const ActivityGrid = (props: ActivityGridProps) => {
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
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        width: '100%',
    },
});

export default ActivityGrid;