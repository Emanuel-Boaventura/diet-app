import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonIconStyleProps = 'primary' | 'secondary'

type Props = {
  type: ButtonIconStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  width: 100%;
  background: ${({ theme, type }) => type === "primary" ? theme.colors.base200 : theme.colors.base600};

  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  border-radius: 6px;
`

export const Text = styled.Text<Props>`
  color: ${({ theme, type }) => type === "primary" ? theme.colors.base700 : theme.colors.base100};
  font-family: ${({ theme }) => theme.fonts.bold};
`