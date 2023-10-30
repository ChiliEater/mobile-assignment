import React, { createContext } from 'react';
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
import { Die, Lemons, Sign } from '../image/Images';
import { shortTutorials } from '../content/TutorialContent';
import { shortGames } from '../content/GameContent';
import NewsShelf from './NewsShelf';
import ButtonShelf from './ButtonShelf';

type HomeProps = {
    navigation: any
};

export const NavigationContext = createContext(undefined);

const Home = (props: HomeProps) => {
    return (
        <NavigationContext.Provider value={props.navigation}>
            <View>
                <ScrollView style={{ zIndex: 0, elevation: 0 }}>
                    <Header />
                    <InfoBody>
                        {shortTutorials()}
                    </InfoBody>
                    <ActivityGrid>
                        {shortGames()}
                    </ActivityGrid>
                    <NewsShelf ids={[0, 1]}/>
                    <ButtonShelf/>
                    <Footer><Icon name="copyright" size={13} /> Evil Gambling & Co. Ltd.</Footer>
                </ScrollView>
            </View>
        </NavigationContext.Provider>
    )
};

export default Home;