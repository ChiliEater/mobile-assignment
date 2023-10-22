import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Activity from './Activity';
import ActivityGrid from './ActivityGrid';
import Footer from './Footer';
import Header from './Header';
import InfoBody from './InfoBody';
import InfoPanel from './InfoPanel';
import TopBar from './TopBar';
import {Die, Lemons, Sign} from '../image/Images';


const Home = () => {
    return (
        <View>
            <ScrollView style={{ zIndex: 0, elevation: 0 }}>
                <Header />
                <InfoBody>
                    <InfoPanel
                        title='How it works'
                        info='It couldn&#39;t be simpler! Just press the button above, pay and await your lucky prize! (Prizes not guaranteed)'
                        image={Die}
                        side='left'
                    />
                    <InfoPanel
                        title='When life gives you lemons...'
                        info='...make lemonade! Having an unlucky streak? No worries, it happens to the best of us. That&#39;s why we offer discounts on consecutive rolls!'
                        image={Lemons}
                        side='right'
                    />
                    <InfoPanel
                        title='Not exciting enough?'
                        info='No worries! There&#39;s more waiting for you. Check out the activities below. (The following information is need to play: your name, address, date of birth, social security number, nationality, place of residence, next of kin, political affiliation, favorite food, list of pets, diet and health status. You agree to sign a waiver before rolling.)'
                        image={Sign}
                        side='left'
                    />
                </InfoBody>
                <ActivityGrid>
                    <Activity title="Slots">Classic slot machines!</Activity>
                    <Activity title="Blackjack">Obvously! What&#39;s gambling without Blackjack?</Activity>
                    <Activity title="Horse Races">A tradition as old as society.</Activity>
                    <Activity title="Poker">A good poker night always leads to a good time!</Activity>
                </ActivityGrid>
                <Footer><Icon name="copyright" size={13} /> Evil Gambling & Co. Ltd.</Footer>
            </ScrollView>
        </View>
    )
};

export default Home;