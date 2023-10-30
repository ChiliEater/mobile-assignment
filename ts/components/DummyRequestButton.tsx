import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, ImageURISource, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';
import { TutorialContent, TutorialContentList } from '../content/TutorialContent';
import { NavigationContext } from './Home';
import Post from '../remote/Post';
import Remote from '../remote/Remote';

type DummyRequestButtonProps = {
    children: React.ReactNode,
    restFunc: Function,
}

const DummyRequestButton = (props: DummyRequestButtonProps) => {
    return (
        <Pressable onTouchEnd={() => props.restFunc()}>
            <View style={styles.container}>
                <Text style={styles.body}>{props.children}</Text>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        borderRadius: 20,
        backgroundColor: Colors.level2,
        gap: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        color: Colors.text1,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default DummyRequestButton;