import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { GameContentList, GamesContent } from "../../content/GameContent";
import ViewportUnits from "../../calculation/ViewportUnits";
import Colors from "../../Colors";

type GameDetailsProps = {
    content: GamesContent,
}

export const GameDetails = (props: GameDetailsProps) => {
    return (
        <ScrollView style={styles.body}>
            <Text style={styles.title}>{props.content.title}</Text>
            {props.content.text}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.level2,
        display: "flex",
        padding: 60,
        minHeight: ViewportUnits.vh(100),
        columnGap: 20,
    },
    title: {
        color: Colors.text1,
        fontSize: 40,
        fontWeight: "bold",
    },
    image: {
        width: "100%",
        borderRadius: 20,
    }
});


export const GameDetails0 = () => {
    return (<GameDetails content={GameContentList[0]} />)
}

export const GameDetails1 = () => {
    return (<GameDetails content={GameContentList[1]} />)
}

export const GameDetails2 = () => {
    return (<GameDetails content={GameContentList[2]} />)
}

export const GameDetails3 = () => {
    return (<GameDetails content={GameContentList[3]} />)
}