import { useNavigation, NavigationProp } from "@react-navigation/native";
import logo from "../../../assets/logo.png";
import Button from "../../components/Button";
import Resume from "../../components/Resume";
import {
  Container,
  HeaderContainer,
  Logo,
  MealsText,
  PlusIcon,
} from "./styles";
import { useTheme } from "styled-components/native";
import { StackNavigation } from "../../types/routes";

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

      <Button text="Nova refeição" icon={<PlusIcon />} />

      {/* List of meals */}
    </Container>
  );
};

export default Home;
