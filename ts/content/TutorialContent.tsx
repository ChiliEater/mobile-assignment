import { StyleSheet, Text } from "react-native"
import { Die, Lemons, Sign } from "../image/Images"
import InfoPanel from "../components/InfoPanel"
import { ReactStack } from "../App"
import TutorialDetails from "../components/details/TutorialDetails"
import { createContext } from "react"
import Colors from "../Colors"

export type TutorialContent = {
    id: number,
    shortTitle: string, // Displayed in titlebar
    title: string, // Displayed in home
    shortText: string, // Displayed in home
    detailTitle: string // Displayed in detail page
    text: JSX.Element, // Displayed in detail page
    image?: any, // this why i hate js
}

const styles = StyleSheet.create({
    text: {
        color: Colors.text2,
        fontSize: 20,
    }
});

export const TutorialContentList: Array<TutorialContent> = [
    {
        id: 0,
        shortTitle: "How it works",
        title: "How it works",
        shortText: 'It couldn\'t be simpler! Just press the button above, pay and await your lucky prize! (Prizes not guaranteed)',
        detailTitle: "How it works",
        text: <Text style={styles.text}>It couldn&#39;t be simpler! Just press the button above, pay and await your lucky prize! (Prizes not guaranteed)</Text>,
        image: Die,
    },
    {
        id: 1,
        shortTitle: "Lemonade",
        title: "When life gives you lemons...",
        shortText: "...make lemonade! Having an unlucky streak? No worries, it happens to the best of us. That\'s why we offer discounts on consecutive rolls!",
        detailTitle: "When life gives you lemons...",
        text: <Text style={styles.text}>...make lemonade! Having an unlucky streak? No worries, it happens to the best of us. That&#39;s why we offer discounts on consecutive rolls!</Text>,
        image: Lemons,
    },
    {
        id: 2,
        shortTitle: "Excitement",
        title: "Not exciting enough?",
        shortText: "No worries! There\'s more waiting for you. Check out the activities below. (The following information is need to play: your name, address, date of birth, social security number, nationality, place of residence, next of kin, political affiliation, favorite food, list of pets, diet and health status. You agree to sign a waiver before rolling.)",
        detailTitle: "Not exciting enough?",
        text: <Text style={styles.text}>No worries! There&#39;s more waiting for you. Check out the activities below. (The following information is need to play: your name, address, date of birth, social security number, nationality, place of residence, next of kin, political affiliation, favorite food, list of pets, diet and health status. You agree to sign a waiver before rolling.)</Text>,
        image: Sign,
    }
]


export const TutorialDetailsContext = createContext(TutorialContentList[0]);

export function shortTutorials() {
    let left = false;
    return TutorialContentList.map(element => {
        left = !left;
        return (
            <InfoPanel
                key={element.id}
                content={element}
                side={left ? 'left' : 'right'}
            />);
    });
}

/*
export function tutorialScreens(stack: ReactStack, keyOffset: number) {
    return TutorialContentList.map((element) => {
        return (
            <TutorialDetailsContext.Provider value={element}>
                <stack.Screen
                    key={keyOffset + element.id}
                    name={element.shortTitle}
                    component={TutorialDetails}
                />
            </TutorialDetailsContext.Provider>
        )
    });
}
*/