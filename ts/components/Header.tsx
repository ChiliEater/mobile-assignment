import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';
import RollButton from './RollButton';
import CyclicText from './CyclicText';

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <CyclicText colors={Colors.textColors(1)} textStyle={styles.title}>Big.</CyclicText>
                <CyclicText colors={Colors.textColors(2)} textStyle={styles.title}>Bucks.</CyclicText>
                <CyclicText colors={Colors.textColors()} textStyle={styles.title} >Bonanza.</CyclicText>
            </View>
            <Text style={styles.slogan}>"Win prizes beyond your imagination."</Text>
            <RollButton></RollButton>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: Colors.level0,
        //height: ViewportUnits.vh(50),
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: 'column',
    },
    title: {
        fontSize: 60,
        fontWeight: '900',
        margin: 0,
        padding: 0,
    },
    titleBig: {
        color: Colors.text2,
    },
    titleBucks: {
        color: Colors.text1,
    },
    titleBonanza: {
        color: Colors.text0,
    },
    slogan: {
        color: Colors.text0,
        marginTop: 60,
        fontSize: ViewportUnits.vw(4),
        fontStyle: 'italic',
        alignSelf: 'center',
    },
    rollButtonContainer: {
        marginTop: 50,
        alignSelf: 'center',
    },
    rollButton: {
        backgroundColor: Colors.level2,
    },
    rollButtonText: {
        color: Colors.text0,
        fontSize: 24,
    }
});

export default Header;