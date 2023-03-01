import { Plus } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 90%;
  padding: 12px 0;
  margin: 0 auto;
`
export const HeaderContainer = styled.View`
  margin-bottom: 24px;
`

export const Logo = styled.Image`
  margin-right: auto;
`

export const Avatar = styled.Image`
  margin-right: auto;
  border: 1px solid black;
`

export const MealsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.BS}px;

  margin-top: 40px;
  margin-bottom: 8px;
`

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.BASE_700,
}))``;