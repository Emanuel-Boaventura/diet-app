import logo from "../../../assets/logo.png";
import Resume from "../../components/Resume";
import { Container, HeaderContainer, Logo } from "./styles";

const Home = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo source={logo} />
        {/* <Avatar source={} /> */}
      </HeaderContainer>
      <Resume percent="87,5%" type="secondary" />
    </Container>
  );
};

export default Home;
