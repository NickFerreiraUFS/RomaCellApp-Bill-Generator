import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import {styles} from "./styles"

type Props = TouchableOpacityProps &{
    title: string
    onPress: ()=> void
}

export function Button({title, ...rest}:Props){
    return(
        <TouchableOpacity style={[styles.button, rest.style]} {...rest}>
            <Text style = {styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
