import AsyncStorage from "@react-native-async-storage/async-storage";
import {encode, decode} from 'base-64';
import {Buffer} from "buffer";

class Storage {
    private static JPGHeader = "ffd8";
    private static PNGHeader = "89504e470d0a1a0a";

    public static async storeImage(key: string, image: string) {
        try {
            await AsyncStorage.setItem(key, image);
            console.log(`Saved image ${key}`);
        } catch (error) {
            console.log(error);
        }
    }

    public static async getImage(key: string, callback: (i: string) => void) {
        try {
            const image = await AsyncStorage.getItem(key);
            if (image !== null) {
                callback(`data:image/${this.imageHeader(image)};base64,${image}`);
            } else {
                console.log("Image is null");
            }
        } catch (error) {
            console.log(error);
        }
    }

    private static imageHeader(image: string): "png" | "jpeg" | "other" {
        //const binary = Buffer.from(image, "base64");
        const binary = decode(image);
        const header = binary
            .slice(0, 8)
            .split("")
            .map(c => c
                .charCodeAt(0)
                .toString(16)
                .padStart(2, "0"))
            .join("");
        if (header === this.PNGHeader) {
            return "png";
        }
        if (header.slice(0, 2) === this.JPGHeader) {
            return "jpeg";
        }
        return "other";
    }
}

export default Storage;