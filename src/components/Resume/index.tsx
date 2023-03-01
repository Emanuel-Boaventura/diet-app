import { TouchableOpacityProps } from "react-native";
import {
  ButtonTypeStyleProps,
  Container,
  PercentNumber,
  PercentText,
  SeeMoreArrow,
} from "./styles";

type Props = TouchableOpacityProps & {
  percent: string;
  type?: ButtonTypeStyleProps;
};

const Resume = ({ percent, type = "primary", ...rest }: Props) => {
  return (
    <Container type={type} {...rest} activeOpacity={0.7}>
      <SeeMoreArrow type={type} />
      <PercentNumber>{percent}</PercentNumber>
      <PercentText>refeiçoes dentro da dieta</PercentText>
    </Container>
  );
};

export default Resume;
