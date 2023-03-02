import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../types/routes";

export function NewMeal() {
  const { navigate } = useNavigation<StackNavigation<"newMeal">>();

  return <></>;
}
