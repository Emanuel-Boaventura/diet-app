import styled from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'primary' | 'secondary'

type Props = {
  type: ButtonTypeStyleProps;
}


export const Container = styled(TouchableOpacity) <Props>`
  width: 100%;
  background: ${({ theme, type }) => type === 'primary' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 32px;
  position: relative;
`

export const PercentNumber = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`

export const PercentText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.BS}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`

export const SeeMoreArrow = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'primary' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
})) <Props>`
  position: absolute;
  top: 8px;
  right: 8px;
`;