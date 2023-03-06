import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackParamList = {
  home: undefined;
  summary: undefined;
  setMeal: { edit?: boolean };
}

export type StackNavigation<K extends keyof StackParamList> = NativeStackNavigationProp<
  StackParamList,
  K
> & {
  navigate<K extends keyof StackParamList>(
    name: K,
    params?: StackParamList[K] extends undefined ? undefined : StackParamList[K]
  ): void;
};

export type StackProp<K extends keyof StackParamList> = RouteProp<StackParamList, K>