import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { ReactStack, screenStyle } from "../../App"
import { DetailsProps } from "./Details"
import { useContext } from "react"
import { TutorialContent, TutorialContentList, TutorialDetailsContext } from "../../content/TutorialContent"
import Colors from "../../Colors"
import ViewportUnits from "../../calculation/ViewportUnits"

type TutorialDetailsProps = {
    content: TutorialContent,
}

export const TutorialDetails = (props: TutorialDetailsProps) => {
    return (
        <ScrollView style={styles.body}>
            <Text style={styles.title}>{props.content.title}</Text>
            <Image style={styles.image} source={props.content.image} />
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

/* Cursed stuff because react */
export const TutorialDetails0 = () => {
    return (<TutorialDetails content={TutorialContentList[0]} />)
}

export const TutorialDetails1 = () => {
    return (<TutorialDetails content={TutorialContentList[1]} />)
}

export const TutorialDetails2 = () => {
    return (<TutorialDetails content={TutorialContentList[2]} />)
}

export default TutorialDetails;