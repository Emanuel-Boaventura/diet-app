import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type DietType = {
  type: 'inside' | 'outside';
  selected: 'inside' | 'outside' | null;
}

export type DotType = {
  type: 'inside' | 'outside';
}

export type InputType = {
  description?: boolean;
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
  background-color: ${({ theme }) => theme.colors.base700};
  gap: 24px;
  `

export const TextTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  margin-bottom: 4px;
  `

export const InputDate = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSize.bs}px;
  border: 1px solid ${({ theme }) => theme.colors.base500};
  border-radius: 6px;
  padding: 14px;
  `

export const InputTime = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSize.bs}px;
  border: 1px solid ${({ theme }) => theme.colors.base500};
  flex: 1;
  border-radius: 6px;
  padding: 14px;
  `

export const InputArea = styled.TextInput<InputType>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSize.bs}px;
  border: 1px solid ${({ theme }) => theme.colors.base500};
  border-radius: 6px;
  padding: 14px;
  ${({ description }) => description ? 'height: 200px' : ''};
  `

export const Label = styled.View`
  /* flex: ASDASD1; */
`

export const LabelTime = styled.View`
  flex: 1;
`

export const TimeContainer = styled.View`
  flex-direction: row;
  gap: 20px;
  margin-bottom: 24px;
  `

export const DietTypeContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-top: 4px;
  `
export const Dot = styled.View<DotType>`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${({ theme, type }) => type === 'inside' ? theme.colors.greenDark : theme.colors.redDark};
    
    `

export const DietType = styled.TouchableOpacity<DietType>`
  background-color: ${({ theme, type, selected }) => (type === selected) ? (type === 'inside' ? theme.colors.greenLight : theme.colors.redLight) : theme.colors.base600};
  border: 1px solid ${({ theme, type, selected }) => (type === selected) ? (type === 'inside' ? theme.colors.greenDark : theme.colors.redDark) : theme.colors.base600};
  flex: 1;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  border-radius: 6px;
  `