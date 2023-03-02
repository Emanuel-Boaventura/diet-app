import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackParamList = {
  home: undefined;
  summary: undefined;
  newMeal: undefined;
}

export type StackNavigation<K extends keyof StackParamList> = NativeStackNavigationProp<StackParamList, K>

export type StackProp<K extends keyof StackParamList> = RouteProp<StackParamList, K>