import react from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import SImpleScreen from "../screen/SImpleScreen";
import CompuestaScreen from "../screen/CompuestaScreen";



const Stack = createNativeStackNavigator();

export default function NavigationStack() {
return (
<Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Simple" component={SImpleScreen}/>
    
</Stack.Navigator>

)
}