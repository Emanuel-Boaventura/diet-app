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

const Home = () => {
  const nav = useNavigation<any>(); // ver com o mariano oq coloca

  function handleShowSummary() {
    nav.navigate("summary");
  }

  return (
    <Container>
      <HeaderContainer>
        <Logo source={logo} />

        {/* <Avatar source={} /> */}
      </HeaderContainer>

      <Resume percent="87,5%" type="secondary" onPress={handleShowSummary} />

      <MealsText>Refeições</MealsText>

      <Button text="Nova refeição" icon={<PlusIcon />} />

      {/* List of meals */}
    </Container>
  );
};

export default Home;
