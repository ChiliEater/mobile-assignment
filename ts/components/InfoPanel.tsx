import React, { useContext } from 'react';
import { Image, ImageURISource, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';
import { TutorialContent, TutorialContentList } from '../content/TutorialContent';
import { NavigationContext } from './Home';

type InfoPanelProps = {
    content: TutorialContent,
    side: 'left' | 'right',
}

const InfoPanel = (props: InfoPanelProps) => {
    const navigation = useContext(NavigationContext) as any;
    const text =
        <View style={styles.textContainer}>
            <Text style={styles.title}>{props.content.shortTitle}</Text>
            <Text style={styles.info}>{props.content.shortText}</Text>
        </View>;

    const image = <Image style={styles.image} source={props.content.image} />;
    return (
        <Pressable onTouchEnd={() => navigation.navigate(TutorialContentList[props.content.id].shortTitle)}>
            <View style={styles.container}>
                {props.side == 'left' ? text : image}
                {props.side == 'left' ? image : text}
            </View>
        </Pressable>
    )
};

const panelHeight = 22;
const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: Colors.level2,
        padding: 20,
        gap: 20,
        alignItems: "center",
        flexDirection: 'row',
        //flexWrap: 'wrap',
        width: ViewportUnits.vw(85),
        maxWidth: ViewportUnits.vw(100),
        //height: ViewportUnits.vh(panelHeight),
        //maxHeight: ViewportUnits.vh(panelHeight),
        borderRadius: 20,
    },
    textContainer: {
        display: 'flex',
        //maxHeight: ViewportUnits.vh(panelHeight),
        flex: 3,
    },
    title: {
        color: Colors.text0,
        fontSize: ViewportUnits.vw(5),
        fontWeight: '600',
        flexWrap: 'wrap',
    },
    info: {
        color: Colors.text1,
        fontSize: ViewportUnits.vw(4),
        flexWrap: 'wrap',
    },
    image: {
        height: '100%',
        //aspectRatio: 1,
        borderRadius: 20,
        flex: 2,
        //resizeMode: 'contain',
    }
});

export default InfoPanel;