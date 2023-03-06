import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StackNavigation, StackProp } from "../../types/routes";
import {
  BackIcon,
  Container,
  HeaderSafeContent,
  PercentNumber,
  PercentText,
} from "./styles";

type SetMealScreenRouteProp = StackProp<"setMeal">;
type SetMealScreenNavigationProp = StackNavigation<"setMeal">;

type SetMealScreenProps = {
  route: SetMealScreenRouteProp;
  navigation: SetMealScreenNavigationProp;
};

export function SetMeal({ route, navigation }: SetMealScreenProps) {
  const { navigate, goBack } = useNavigation<StackNavigation<"setMeal">>();
  const { edit } = route.params ?? {};

  return (
    <Container>
      <HeaderSafeContent>
        <TouchableOpacity onPress={() => goBack()} activeOpacity={0.8}>
          <BackIcon />
        </TouchableOpacity>

        <PercentNumber>
          {edit ? "Editar refeição" : "Nova refeição"}
        </PercentNumber>

        <PercentText>refeiçoes dentro da dieta</PercentText>
      </HeaderSafeContent>
    </Container>
  );
}
