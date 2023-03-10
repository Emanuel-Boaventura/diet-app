import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import logo from "../../../assets/logo.png";
import Button from "../../components/Button";
import Resume from "../../components/Resume";
import { StackNavigation } from "../../types/routes";
import {
  Container,
  HeaderContainer,
  Logo,
  MealsText,
  PlusIcon,
} from "./styles";

const Home = () => {
  const { navigate } = useNavigation<StackNavigation<"home">>();
  const { colors } = useTheme();

  return (
    <Container style={{ backgroundColor: colors.base600 }}>
      <HeaderContainer>
        <Logo source={logo} />

        {/* <Avatar source={} /> */}
      </HeaderContainer>

      <Resume
        percent="87,5%"
        type="secondary"
        onPress={() => navigate("summary")}
      />

      <MealsText>Refeições</MealsText>

      <Button
        text="Nova refeição"
        icon={<PlusIcon />}
        onPress={() => navigate("setMeal", { edit: true })}
      />

      {/* List of meals */}
    </Container>
  );
};

export default Home;
