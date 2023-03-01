import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'primary' | 'secondary'

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  width: 100%;
  background: ${({ theme, type }) => type === 'primary' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
 
  flex: 1;

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
