import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, ImageURISource, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';
import { TutorialContent, TutorialContentList } from '../content/TutorialContent';
import { NavigationContext } from './Home';
import Post from '../remote/Post';
import Remote from '../remote/Remote';

type NewsProps = {
    id: number,
}

const News = (props: NewsProps) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Post>();

    const getPost = async () => {
        const post: Post = await Remote.getPost(props.id) as unknown as Post;
        setData(post);
        setLoading(false);
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : ([
                    <Text style={styles.title} key={0}>{data?.title}</Text>,
                    <Text style={styles.body} key={1}>{data?.body}</Text>
            ])}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        borderRadius: 20,
        backgroundColor: Colors.level2,
        gap: 10,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text0,
    },
    body: {
        color: Colors.text1,
        fontSize: 16,
    },
});

export default News;