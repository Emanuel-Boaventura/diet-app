import styled from "styled-components/native";

export type BlockTypeStyleProps = 'gray' | 'green' | 'red';

type BlockProps = {
  type?: BlockTypeStyleProps;
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

export const PercentNumber = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const PercentText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.bs}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const SummaryContainer = styled.View`
  width: 100%;
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
  /* ${({ type }) => type === 'gray' ? "width: 100%" : "flex: 1"} */
  /* flex: ${({ type }) => type === 'gray' ? null : 1}; */
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  gap: 4px;

  align-items: center;

  background: ${({ theme }) => theme.colors.base300};
`

export const SeparedMeals = styled.View`
  width: 100%;
  flex-direction: row;
`

export const BlockNumber = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const BlockText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`