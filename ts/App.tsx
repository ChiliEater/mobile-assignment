/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import TopBar from "./components/TopBar";

import Colors from "./Colors";
import Header from './components/Header';
import InfoBody from './components/InfoBody';
import InfoPanel from './components/InfoPanel';
import ActivityGrid from './components/ActivityGrid';
import Activity from './components/Activity';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Footer from './components/Footer';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text>
                {children}
            </Text>
        </View>
    );
}

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={Colors.level1}
            />
            <TopBar />
            <ScrollView style={{ zIndex: 0, elevation: 0 }}>
                <Header />
                <InfoBody>
                    <InfoPanel
                        title='How it works'
                        info='It couldn&#39;t be simpler! Just press the button above, pay and await your lucky prize! (Prizes not guaranteed)'
                        image={require('../res/img/die.jpg')}
                        side='left'
                    />
                    <InfoPanel
                        title='When life gives you lemons...'
                        info='...make lemonade! Having an unlucky streak? No worries, it happens to the best of us. That&#39;s why we offer discounts on consecutive rolls!'
                        image={require('../res/img/lemons.jpg')}
                        side='right'
                    />
                    <InfoPanel
                        title='Not exciting enough?'
                        info='No worries! There&#39;s more waiting for you. Check out the activities below. (The following information is need to play: your name, address, date of birth, social security number, nationality, place of residence, next of kin, political affiliation, favorite food, list of pets, diet and health status. You agree to sign a waiver before rolling.)'
                        image={require('../res/img/sign.jpg')}
                        side='left'
                    />
                </InfoBody>
                <ActivityGrid>
                    <Activity title="Slots">Classic slot machines!</Activity>
                    <Activity title="Blackjack">Obvously! What&#39;s gambling without Blackjack?</Activity>
                    <Activity title="Horse Races">A tradition as old as society.</Activity>
                    <Activity title="Poker">A good poker night always leads to a good time!</Activity>
                </ActivityGrid>
                <Footer><Icon name="copyright" size={13}/> Evil Gambling & Co. Ltd.</Footer>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
