import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.base500};
`
export const HeaderSafeContent = styled(SafeAreaView).attrs({
  edges: ['top']
})`
  padding: 24px;
`

export const PercentNumber = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  `

export const PercentText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.bs}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
`

export const MealContent = styled(SafeAreaView).attrs({
  edges: ['bottom']
})`
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 28,
  color: theme.colors.base200,
}))``;
