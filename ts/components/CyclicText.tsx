import React, { ReactNode, useState } from 'react';
import { Pressable, StyleSheet, StyleSheetProperties, Text, TextStyle, View, ViewStyle } from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewportUnits from '../calculation/ViewportUnits';

type CyclicTextProps = {
    children: ReactNode,
    colors: string[],
    style?: ViewStyle,
    textStyle: TextStyle,
};


const CyclicText = (props: CyclicTextProps) => {
    const [color, setColor] = useState(0);
    const override = StyleSheet.create({
        text: {
            color: props.colors[color],
        }
    });
    return (
        <Pressable style={props.style} onTouchEnd={() => setColor((color + 1) % props.colors.length)}>
            <Text style={[props.textStyle, override.text]}>{props.children}</Text>
        </Pressable>
    )
};


export default CyclicText;