import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type DietType = {
  insideDiet: boolean | null;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.base500};
`

export const HeaderSafeContent = styled(SafeAreaView).attrs({
  edges: ['top']
})`
  padding: 24px;
  flex-direction: row;
`

export const HeaderText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  `;

export const CenterView = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 28,
  color: theme.colors.base200,
}))``

export const MealContent = styled(SafeAreaView).attrs({
  edges: ['bottom']
})`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.base700}
  `

export const TextTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  `

export const InputDate = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  border: 1px solid ${({ theme }) => theme.colors.base500};
  flex: 1;
  `

export const InputTime = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  border: 1px solid ${({ theme }) => theme.colors.base500};
  flex: 1;
  `

export const InputArea = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  border: 1px solid ${({ theme }) => theme.colors.base500};
  `
export const TimeContainer = styled.View`
  flex-direction: row;
  `

export const DietTypeContainer = styled.View`
  flex-direction: row;
  `

export const DietType = styled.TouchableOpacity<DietType>`
 
  background-color: ${({ theme, insideDiet }) => insideDiet ? theme.colors.greenLight : theme.colors.redLight};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  `