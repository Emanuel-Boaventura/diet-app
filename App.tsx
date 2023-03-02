import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import Routes from "./src/routes";
import { dark, ITheme, light } from "./src/theme/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });
  const [theme, setTheme] = useState<ITheme>(light);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={theme.statusBar} />
      <Routes />
    </ThemeProvider>
  );
}
