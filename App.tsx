import Home from "./src/pages/Home";

import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { ThemeProvider, useTheme } from "styled-components/native";
import light from "./src/theme/light";
import { StatusBar } from "expo-status-bar";
import dark from "./src/theme/dark";
import { View } from "react-native";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={dark}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}
