import React, {useState} from "react"
import { View, Text } from "react-native"
const UseState = () => {
    const a = useState("using useState")
    return(
        <View>
            <Text>{a}</Text>
        </View>
    )
}
export default UseState