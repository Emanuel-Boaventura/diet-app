import { Text } from "react-native";
import { Container, PercentNumber, PercentText } from "./styles";

const Summary = () => {
  return (
    <Container type="primary">
      <PercentNumber>87,5%</PercentNumber>

      <PercentText>refeiçoes dentro da dieta</PercentText>
    </Container>
  );
};

export default Summary;
