import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { GameContentList, GamesContent } from "../../content/GameContent";
import ViewportUnits from "../../calculation/ViewportUnits";
import Colors from "../../Colors";

export const CopyrightDetails = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>ALL rights reserved by Evil Gambling & Co. Ltd. (2024)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.level2,
        display: "flex",
        padding: 60,
        minHeight: ViewportUnits.vh(90),
        columnGap: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: Colors.text1,
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
    },

});

