import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 90%;
  padding: 12px 0;
  margin: 0 auto;
`
export const HeaderContainer = styled.View`
  margin-bottom: 24px;
`

export const Logo = styled.Image`
  margin-right: auto;
`

export const Avatar = styled.Image`
  margin-right: auto;
  border: 1px solid black;
`