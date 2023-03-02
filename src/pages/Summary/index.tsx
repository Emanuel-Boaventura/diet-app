import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { ContainerWithHeader } from "../../components/GlobalComponents/styles";
import {
  BackIcon,
  Block,
  BlockNumber,
  BlockText,
  ButtonContainer,
  HeaderContainer,
  PercentNumber,
  PercentText,
  SeparedMeals,
  SummaryContainer,
  SummaryTitle,
} from "./styles";

const Summary = () => {
  const { colors } = useTheme();
  const { goBack } = useNavigation<any>();

  const type = "secondary";

  return (
    <ContainerWithHeader
      style={{
        backgroundColor:
          type === "primary" ? colors.greenLight : colors.redLight,
      }}
    >
      <HeaderContainer>
        <ButtonContainer onPress={() => goBack()} activeOpacity={0.8}>
          <BackIcon type={type} />
        </ButtonContainer>

        <PercentNumber>87,5%</PercentNumber>

        <PercentText>refeiçoes dentro da dieta</PercentText>
      </HeaderContainer>

      <SummaryContainer>
        <SummaryTitle>Estatísticas gerais</SummaryTitle>

        <Block type="gray" style={{ backgroundColor: colors.base600 }}>
          <BlockNumber>4</BlockNumber>
          <BlockText>melhor sequência de pratos dentro da dieta</BlockText>
        </Block>

        <Block type="gray" style={{ backgroundColor: colors.base600 }}>
          <BlockNumber>109</BlockNumber>
          <BlockText>refeições registradas</BlockText>
        </Block>

        <SeparedMeals>
          <Block style={{ backgroundColor: colors.greenLight }}>
            <BlockNumber>32</BlockNumber>
            <BlockText>refeições dentro da dieta</BlockText>
          </Block>

          <Block style={{ backgroundColor: colors.redLight }}>
            <BlockNumber>77</BlockNumber>
            <BlockText>refeições fora da dieta</BlockText>
          </Block>
        </SeparedMeals>
      </SummaryContainer>
    </ContainerWithHeader>
  );
};

export default Summary;
