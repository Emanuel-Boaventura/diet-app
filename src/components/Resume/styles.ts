import styled from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'primary' | 'secondary'

type Props = {
  type: ButtonTypeStyleProps;
}


export const Container = styled(TouchableOpacity) <Props>`
  width: 100%;
  background: ${({ theme, type }) => type === 'primary' ? theme.colors.greenLight : theme.colors.redLight};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 32px;
  position: relative;
`

export const PercentNumber = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const PercentText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.bs}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const SeeMoreArrow = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'primary' ? theme.colors.greenDark : theme.colors.redDark,
})) <Props>`
  position: absolute;
  top: 8px;
  right: 8px;
`;