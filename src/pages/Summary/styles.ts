import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export type BlockTypeStyleProps = 'gray' | 'green' | 'red';
export type ButtonTypeStyleProps = 'primary' | 'secondary';

type BlockProps = {
  type?: BlockTypeStyleProps;
}


type ButtonProps = {
  type?: ButtonTypeStyleProps;
}

export const HeaderContainer = styled.View`
  width: 100%;
  height: 20%;

  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 32px;
  position: relative;
`

export const ButtonContainer = styled(TouchableOpacity)`
  position: absolute;
  top: 24px;
  left: 24px;
`

export const BackIcon = styled(ArrowLeft).attrs<ButtonProps>(({ theme, type }) => ({
  size: 28,
  color: type === 'primary' ? theme.colors.greenDark : theme.colors.redDark,
})) <ButtonProps>``;


export const PercentNumber = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const PercentText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.bs}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const SummaryContainer = styled.View`
  flex: 1;
  gap: 12px;

  border-radius: 20px;
  padding: 24px;

  background: ${({ theme }) => theme.colors.base700};
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