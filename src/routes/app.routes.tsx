import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Summary from "../pages/Summary";
import { SetMeal } from "../pages/SetMeal";
import { StackParamList } from "../types/routes";

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="summary" component={Summary} />

      <Screen name="setMeal" component={SetMeal} />
    </Navigator>
  );
}

export default AppRoutes;
