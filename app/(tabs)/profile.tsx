import { Link } from "expo-router"
import { View,Text } from "react-native"


export default function Signin() {
   
   
    return (
        <View>
            <Text>
            Profile
            </Text>
            <Link href="/account">
            <Text>Account Information</Text>
            </Link>
        </View>
    )
}
