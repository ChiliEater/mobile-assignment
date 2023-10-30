import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, ImageURISource, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';
import { TutorialContent, TutorialContentList } from '../content/TutorialContent';
import { NavigationContext } from './Home';
import Post from '../remote/Post';
import Remote from '../remote/Remote';
import News from './News';

type NewsShelfProps = {
    ids: number[],
}

const NewsShelf = (props: NewsShelfProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Latest News</Text>
            {
                props.ids.map(id => {
                    return (
                        <News id={id} key={id}/>
                    )
                })
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: Colors.level1,
        gap: 20,
        padding: 20,
    },
    title: {
        color: Colors.text0,
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
    },
});

export default NewsShelf;