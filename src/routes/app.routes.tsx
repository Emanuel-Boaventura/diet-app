import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Summary from "../pages/Summary";

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="summary" component={Summary} />
    </Navigator>
  );
}

export default AppRoutes;
