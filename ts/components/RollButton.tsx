import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';

const RollButton = () => {
    const [rolled, setRolled] = useState("???");
    const minRoll = 100000;
    const maxRoll = 999999;
    return (
        <View style={styles.rollButtonContainer}>
            <Icon.Button
                name="casino"
                color={Colors.text0}
                style={styles.rollButton}
                onPress={() => setRolled(Math.round((maxRoll - minRoll) * Math.random() + minRoll).toString())}
            ><Text style={styles.rollButtonText}>Roll now!</Text></Icon.Button>
            <Text style={styles.rolledNumber}>{rolled}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
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
    },
    rolledNumber: {
        textAlign: "center",
        marginTop: 15,
        fontSize: 20,
        color: Colors.text0,
        fontWeight: "600",
    }
});

export default RollButton;