/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    StatusBar,
    StyleProp,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';


import Colors from "./Colors";
import { NavigationContainer, ParamListBase, StackNavigationState, TypedNavigator } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationEventMap, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Home from './components/Home';
// Pretty sure this is cursed
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

export type ReactStack = TypedNavigator<ParamListBase, StackNavigationState<ParamListBase>, NativeStackNavigationOptions, NativeStackNavigationEventMap, ({ id, initialRouteName, children, screenListeners, screenOptions, ...rest }: NativeStackNavigatorProps) => JSX.Element>

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

const stack: ReactStack = createNativeStackNavigator();

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    //const isDarkMode = false;
    return (
        <NavigationContainer>

            <stack.Navigator>
                <stack.Screen
                    name="Home"
                    component={Home}
                    options={screenStyle("B. B. B.")}
                />
            </stack.Navigator>
        </NavigationContainer>
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

export function screenStyle(title: string): NativeStackNavigationOptions {
    return {
        title: title,
        statusBarColor: Colors.level1,
        navigationBarColor: Colors.level1,
        headerStyle: { backgroundColor: Colors.level1 },
        headerTitleStyle: { color: Colors.text0, fontSize: 30 }
    }
}

export default App;
