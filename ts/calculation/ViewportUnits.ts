import { Dimensions, View } from 'react-native';

class ViewportUnits {
    public static vw(multiplier: number) {
        return Dimensions.get('window').width as number / 100.0 * multiplier;
    }

    public static vh(multiplier: number) {
        return Dimensions.get('window').height as number / 100.0 * multiplier;
    }
}
export default ViewportUnits;