import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';
import { GameContentList, GamesContent } from '../content/GameContent';
import { NavigationContext } from './Home';

type ActivityProps = {
    content: GamesContent,
}

const Activity = (props: ActivityProps) => {
    const navigator = useContext(NavigationContext) as any;
    return (
        <Pressable onTouchEnd={() => navigator.navigate(props.content.title)}>
            <View style={styles.container}>
                <Text style={styles.title}>{props.content.title}</Text>
                <Text style={styles.description}>{props.content.shortText}</Text>
            </View>
        </Pressable>
    )
};

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