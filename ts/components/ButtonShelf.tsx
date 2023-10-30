import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, ImageURISource, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';
import { TutorialContent, TutorialContentList } from '../content/TutorialContent';
import { NavigationContext } from './Home';
import Post from '../remote/Post';
import Remote from '../remote/Remote';
import DummyRequestButton from './DummyRequestButton';

type ButtonShelfProps = {
}

const ButtonShelf = (props: ButtonShelfProps) => {
    const postRequest = () => {
        fetch(`${Remote.host}/cookie/dev`, {
            method: 'POST'
        });
    };

    const putRequest = () => {
        fetch(`${Remote.host}/cookie/dev`, {
            method: 'PUT'
        });
    };

    const deleteRequest = () => {
        fetch(`${Remote.host}/cookie/dev`, {
            method: 'DELETE'
        });
    };

    return (
        <View style={styles.container}>
            <DummyRequestButton restFunc={postRequest}>POST</DummyRequestButton>
            <DummyRequestButton restFunc={putRequest}>PUT</DummyRequestButton>
            <DummyRequestButton restFunc={deleteRequest}>DELETE</DummyRequestButton>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.level1,
        gap: 10,
        padding: 20,
        alignItems: 'center',
    },
    body: {
        color: Colors.text1,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ButtonShelf;