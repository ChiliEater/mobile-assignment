import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={[styles.title, styles.titleBig]}>Big.</Text>
                <Text style={[styles.title, styles.titleBucks]}>Bucks.</Text>
                <Text style={[styles.title, styles.titleBonanza]}>Bonanza.</Text>
            </View>
            <Text style={styles.slogan}>"Win prizes beyond your imagination."</Text>
            <View style={styles.rollButtonContainer}>
                <Icon.Button
                    name="casino"
                    color={Colors.text0}
                    style={styles.rollButton}
                ><Text style={styles.rollButtonText}>Roll now!</Text></Icon.Button>
            </View>
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