import {View, Text, StyleSheet} from "react-native";
import {ThemeProvider} from 'styled-components/native';
import { StatusBar } from "expo-status-bar";
import SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react'
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

export default function App() {
    const [appReady, setAppReady] = useState(false)

    useEffect(() => {
      (async () => {
        try {
          await SplashScreen
        } catch (e) {
          console.warn(e);
        } finally {
          setAppReady(true);
        }
      })()
    }, [])

    let [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSerifDisplay_400Regular,
        DMSans_400Regular
    });

    if (!fontsLoaded || !appReady) {
      return null
    }

    return (
        <ThemeProvider theme={COLORS}>
            <StatusBar
                style="dark"
                translucent
                backgroundColor="transparent"
            />
            <View>
                <Login />
            </View>
        </ThemeProvider>
    );
};