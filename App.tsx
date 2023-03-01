import Home from "./src/pages/Home";

import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { ThemeProvider } from "styled-components/native";
import light from "./src/theme/light";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={light}>
      <Home />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
