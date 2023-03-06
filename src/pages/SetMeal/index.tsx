import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import { StackNavigation, StackProp } from "../../types/routes";
import {
  BackButton,
  BackIcon,
  CenterView,
  Container,
  DietType,
  DietTypeContainer,
  HeaderSafeContent,
  HeaderText,
  InputArea,
  InputDate,
  InputTime,
  MealContent,
  TextTitle,
  TimeContainer,
} from "./styles";

type SetMealScreenRouteProp = StackProp<"setMeal">;

type SetMealScreenProps = {
  route: SetMealScreenRouteProp;
};

export function SetMeal({ route }: SetMealScreenProps) {
  const { navigate, goBack } = useNavigation<StackNavigation<"setMeal">>();
  const { edit } = route.params ?? {};
  const { colors } = useTheme();
  const [insideDiet, setInsideDiet] = useState<boolean | null>(null);

  return (
    <Container>
      <HeaderSafeContent>
        <CenterView>
          <BackButton onPress={() => goBack()} activeOpacity={0.8}>
            <BackIcon />
          </BackButton>

          <HeaderText>{edit ? "Editar refeição" : "Nova refeição"}</HeaderText>
        </CenterView>
      </HeaderSafeContent>

      <MealContent>
        <TextTitle>Name</TextTitle>
        <InputArea />

        <TextTitle>Descrição</TextTitle>
        <InputArea />

        <TimeContainer>
          <TextTitle>Data</TextTitle>
          <InputDate />

          <TextTitle>Hora</TextTitle>
          <InputTime />
        </TimeContainer>

        <TextTitle>Está dentro da Dieta?</TextTitle>
        <DietTypeContainer>
          <DietType
            insideDiet={insideDiet}
            onPress={() => setInsideDiet(!insideDiet)}
          >
            <TextTitle>Sim</TextTitle>
          </DietType>

          <DietType
            insideDiet={insideDiet}
            onPress={() => setInsideDiet(!insideDiet)}
          >
            <TextTitle>Não</TextTitle>
          </DietType>
        </DietTypeContainer>
      </MealContent>
    </Container>
  );
}
