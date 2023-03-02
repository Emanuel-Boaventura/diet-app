import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type BlockTypeStyleProps = 'gray' | 'green' | 'red';
export type ButtonTypeStyleProps = 'primary' | 'secondary';

type BlockProps = {
  type?: BlockTypeStyleProps;
}


type ButtonProps = {
  type?: ButtonTypeStyleProps;
}

export const Container = styled.View<ButtonProps>`
  flex: 1;
  background-color: ${({ theme, type }) => type === 'primary' ? theme.colors.greenLight : theme.colors.redLight};
`

export const BackIcon = styled(ArrowLeft).attrs<ButtonProps>(({ theme, type }) => ({
  size: 28,
  color: type === 'primary' ? theme.colors.greenDark : theme.colors.redDark,
})) <ButtonProps>``;

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

export const SummaryContainer = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.base700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const SummarySafeContent = styled(SafeAreaView).attrs({
  edges: ['bottom']
})`
  flex: 1;
  gap: 12px;
  
  padding: 24px;
`

export const SummaryTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.base100};

  text-align: center;
`


export const Block = styled.View<BlockProps>`
  width: 100%;
  ${({ type }) => type === 'gray' ? '' : 'flex: 1;'}

  padding: 16px;
  border-radius: 8px;
  gap: 8px;

  background: ${({ theme }) => theme.colors.base300};
`

export const SeparedMeals = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
`

export const BlockNumber = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`

export const BlockText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`