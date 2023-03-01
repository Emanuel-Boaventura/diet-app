import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonIconStyleProps = 'primary' | 'secondary'

type Props = {
  type: ButtonIconStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  width: 100%;
  background: ${({ theme, type }) => type === "primary" ? theme.COLORS.BASE_200 : theme.COLORS.BASE_600};

  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  border-radius: 6px;
`

export const Text = styled.Text<Props>`
  color: ${({ theme, type }) => type === "primary" ? theme.COLORS.BASE_700 : theme.COLORS.BASE_100};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`