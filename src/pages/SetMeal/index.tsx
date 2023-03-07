import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import Button from "../../components/Button";
import { StackNavigation, StackProp } from "../../types/routes";
import { dateMask, timeMask } from "../../utils/masks";
import {
  BackButton,
  BackIcon,
  CenterView,
  Container,
  DietType,
  DietTypeContainer,
  Dot,
  HeaderSafeContent,
  HeaderText,
  InputArea,
  InputDate,
  InputTime,
  Label,
  LabelTime,
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
  const [dietTypeSelected, setDietTypeSelected] = useState<
    "inside" | "outside" | null
  >(null);
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();

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
        <Label>
          <TextTitle>Nome</TextTitle>
          <InputArea />
        </Label>

        <Label>
          <TextTitle>Descrição</TextTitle>
          <InputArea description textAlignVertical="top" multiline />
        </Label>

        <TimeContainer>
          <LabelTime>
            <TextTitle>Data</TextTitle>
            <InputDate
              value={date}
              inputMode="numeric"
              onChangeText={(value) => setDate(dateMask(value))}
            />
          </LabelTime>

          <LabelTime>
            <TextTitle>Hora</TextTitle>
            <InputTime
              value={time}
              inputMode="numeric"
              onChangeText={(value) => setTime(timeMask(value))}
            />
          </LabelTime>
        </TimeContainer>

        <Label>
          <TextTitle>Está dentro da Dieta?</TextTitle>
          <DietTypeContainer>
            <DietType
              type="inside"
              selected={dietTypeSelected}
              onPress={() => setDietTypeSelected("inside")}
            >
              <Dot type="inside" />
              <TextTitle>Sim</TextTitle>
            </DietType>

            <DietType
              type="outside"
              selected={dietTypeSelected}
              onPress={() => setDietTypeSelected("outside")}
            >
              <Dot type="outside" />
              <TextTitle>Não</TextTitle>
            </DietType>
          </DietTypeContainer>
        </Label>
        <Button
          text={edit ? "Salvar alterações" : "Cadastrar refeição"}
          style={{ marginTop: "auto" }}
        />
      </MealContent>
    </Container>
  );
}
