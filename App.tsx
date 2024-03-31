import {View, Text, StyleSheet} from "react-native";
import Apploading from "expo-app-loading";
import {ThemeProvider} from 'styled-components/native';
import { StatusBar } from "expo-status-bar";
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins";
import {DMSans_400Regular} from "@expo-google-fonts/dm-sans";
import {DMSerifDisplay_400Regular} from "@expo-google-fonts/dm-serif-display";
import COLORS from "./src/styles/theme";

import { Login } from "src/screens/Login/login";

export default function App(){

    const [fontsLoaded] = useFonts ({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular
    });

    if(!fontsLoaded) {
        return <Apploading/>
    };

    return(
        <ThemeProvider theme={COLORS}>

            <StatusBar
                style="dark"
                translucent
                backgroundColor="transparent"
            />

            <View >
                <Login/>
            </View>
        </ThemeProvider>
    );
};