import { Image, ImageURISource, Pressable, StyleSheet, Text, View } from "react-native";
import { DefaultAvatar } from "../image/Images";
import Colors from "../Colors";
import { useState } from "react";
import { ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";
import Storage from "../storage/Storage";

const AvatarKey = "AVATAR";

const Profile = () => {
    const [avatar, setAvatar] = useState(DefaultAvatar);
    const [readAttempted, setRead] = useState(false);
    const pickImage = (image: ImagePickerResponse) => {
        if (image.assets == undefined || image.didCancel || image.errorCode != undefined) return;
        setAvatar({uri: image.assets[0].uri});
        Storage.storeImage(AvatarKey, image.assets[0].base64 as string);
    };

    if (!readAttempted) {
        Storage.getImage(AvatarKey, (image: string) => setAvatar({uri: image}));
        setRead(true);
    }

    return (
        <Pressable onTouchEnd={() => launchImageLibrary({mediaType: "photo", includeBase64: true,}, pickImage)}>
            <View style={styles.container}>
                <Text style={styles.text}>You</Text>
                <Image source={avatar} style={styles.image} />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        width: "100%",
        justifyContent: "flex-end",
    },
    text: {
        fontSize: 32,
        color: Colors.text0,
        textDecorationLine: "underline",
    },
    image: {
        height: 64,
        width: 64,
        resizeMode: "cover",
        borderRadius: 90,

    },
});


export default Profile;