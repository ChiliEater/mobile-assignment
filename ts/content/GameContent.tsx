import { StyleSheet, Text } from "react-native"
import { Die, Lemons, Sign } from "../image/Images"
import InfoPanel from "../components/InfoPanel"
import { ReactStack } from "../App"
import TutorialDetails from "../components/details/TutorialDetails"
import { createContext } from "react"
import Colors from "../Colors"
import Activity from "../components/Activity"

export type GamesContent = {
    id: number,
    title: string, // Displayed in home
    shortText: string, // Displayed in home
    text: JSX.Element, // Displayed in detail page
}

const styles = StyleSheet.create({
    text: {
        color: Colors.text2,
        fontSize: 20,
    }
});

export const GameContentList: Array<GamesContent> = [
    {
        id: 0,
        title: 'Slots',
        shortText: 'Classic slot machines!',
        text: <Text style={styles.text}>Classic slot machines but more text!</Text>,
    },
    {
        id: 1,
        title: 'Blackjack',
        shortText: 'Obvously! What\'s gambling without Blackjack?',
        text: <Text style={styles.text}>Obvously! What&#39;s gambling without Blackjack? Truly amazing.</Text>,
    },
    {
        id: 2,
        title: 'Horse Races',
        shortText: 'A tradition as old as society.',
        text: <Text style={styles.text}>A tradition as old as society. Very old.</Text>,
    },
    {
        id: 3,
        title: 'Poker',
        shortText: 'A good poker night always leads to a good time!',
        text: <Text style={styles.text}>A good poker night always leads to a good time! And alcohol poisoning.</Text>,
    },
]


export const GameDetailsContext = createContext(GameContentList[0]);

export function shortGames() {
    return GameContentList.map(element => {
        return (
            <Activity key={element.id} content={element}/>);
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