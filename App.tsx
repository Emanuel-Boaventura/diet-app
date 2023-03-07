import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { Loading } from "./src/components/Loading";
import Routes from "./src/routes";
import { dark, ITheme, light } from "./src/theme/theme";
import { runQuery } from "./src/utils/db";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });
  const [theme, setTheme] = useState<ITheme>(light);

  useEffect(() => {
    (async () => {
      runQuery(
        `
          CREATE TABLE IF NOT EXISTS dates (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL UNIQUE
          )
        `,
        []
      )
        .then(() => {
          runQuery(
            `
          CREATE TABLE IF NOT EXISTS meals (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            createdAt TEXT NOT NULL,
            time TEXT NOT NULL,
            description TEXT,
            type TEXT NOT NULL,
            dateId INTEGER NOT NULL,
            FOREIGN KEY (dateId) REFERENCES dates (id)
          )
          `,
            []
          )
            .then(() =>
              console.log("Meals and Dates table created successfully")
            )
            .catch((error) =>
              console.error("Error creating meals table:", error)
            );
        })
        .catch((error) => console.error("Error creating dates table:", error));
      setLoading(false);
    })();
  }, []);

  if (!fontsLoaded || loading) {
    return (
      <Loading
        colorBase={theme.colors.base700}
        colorMain={theme.colors.greenDark}
        statusBar={theme.statusBar}
      />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={theme.statusBar} />
      <Routes />
    </ThemeProvider>
  );
}
