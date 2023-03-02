import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";
import { StackNavigation } from "../../types/routes";
import {
  BackIcon,
  Block,
  BlockNumber,
  BlockText,
  Container,
  HeaderSafeContent,
  PercentNumber,
  PercentText,
  SeparedMeals,
  SummaryContainer,
  SummarySafeContent,
  SummaryTitle,
} from "./styles";

const Summary = () => {
  const { colors } = useTheme();
  const { goBack } = useNavigation<StackNavigation<"summary">>();
  const [type, setType] = useState<"primary" | "secondary">("primary");

  return (
    <Container type={type}>
      <HeaderSafeContent>
        <TouchableOpacity onPress={() => goBack()} activeOpacity={0.8}>
          <BackIcon type={type} />
        </TouchableOpacity>

        <PercentNumber>87,5%</PercentNumber>

        <PercentText>refeiçoes dentro da dieta</PercentText>
      </HeaderSafeContent>

      <SummaryContainer>
        <SummarySafeContent>
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
        </SummarySafeContent>
      </SummaryContainer>
    </Container>
  );
};

export default Summary;
