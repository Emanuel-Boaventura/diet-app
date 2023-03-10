import { Plus } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  color: ${({ theme }) => theme.colors.base700};
  padding: 24px;
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

export const MealsText = styled.Text`
  color: ${({ theme }) => theme.colors.base100};
  font-size: ${({ theme }) => theme.fontSize.bs}px;

  margin-top: 40px;
  margin-bottom: 8px;
`

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.colors.base700,
}))``;