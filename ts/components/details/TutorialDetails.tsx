import { View } from "react-native"
import { ReactStack, screenStyle } from "../../App"
import { DetailsProps } from "./Details"

type TutorialDetailsProps = {
    stack: ReactStack,
    topic: string,
}

const TutorialDetailsScreen = (props: TutorialDetailsProps) => {
    return(
        <props.stack.Screen 
            name={props.topic}
            component={TutorialDetails}
            options={screenStyle(props.topic)}
        />
    )
} 

const TutorialDetails = () => {
    return (
        <View></View>
    )
}