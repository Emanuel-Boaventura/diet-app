import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { Text } from "react-native";
import { ITheme } from "../../theme/theme";
import { Container, LoadingIcon } from "./styles";

interface IColors {
  colorBase: string;
  colorMain: string;
  statusBar: string;
}

export const Loading = ({ colorBase, colorMain, statusBar }: IColors) => (
  <Container style={{ backgroundColor: colorBase }}>
    <LoadingIcon size="large" color={colorMain} />
    <StatusBar style={statusBar as StatusBarStyle} />
  </Container>
);
