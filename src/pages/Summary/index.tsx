import { useTheme } from "styled-components/native";
import { ContainerWithHeader } from "../../components/GlobalComponents/styles";
import {
  Block,
  BlockNumber,
  BlockText,
  HeaderContainer,
  PercentNumber,
  PercentText,
  SeparedMeals,
  SummaryContainer,
  SummaryTitle,
} from "./styles";

const Summary = () => {
  const { colors } = useTheme();
  const type = "primary";

  return (
    <ContainerWithHeader
      style={{
        backgroundColor:
          type === "primary" ? colors.GREEN_LIGHT : colors.RED_LIGHT,
      }}
    >
      <HeaderContainer>
        <PercentNumber>87,5%</PercentNumber>

        <PercentText>refeiçoes dentro da dieta</PercentText>
      </HeaderContainer>

      <SummaryContainer>
        <SummaryTitle>Estatísticas gerais</SummaryTitle>

        <Block type="gray" style={{ backgroundColor: colors.base600 }}>
          <BlockNumber>4</BlockNumber>
          <BlockText>melhor sequência de pratos dentro da dieta</BlockText>
        </Block>

        <Block style={{ backgroundColor: colors.base600 }}>
          <BlockNumber>109</BlockNumber>
          <BlockText>refeições registradas</BlockText>
        </Block>

        <SeparedMeals>
          <Block style={{ backgroundColor: colors.GREEN_MID }}>
            <BlockNumber>32</BlockNumber>
            <BlockText>refeições dentro da dieta</BlockText>
          </Block>

          <Block style={{ backgroundColor: colors.RED_MID }}>
            <BlockNumber>77</BlockNumber>
            <BlockText>refeições fora da dieta</BlockText>
          </Block>
        </SeparedMeals>
      </SummaryContainer>
    </ContainerWithHeader>
  );
};

export default Summary;
