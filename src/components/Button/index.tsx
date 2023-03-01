import { TouchableOpacityProps } from "react-native";
import { ButtonIconStyleProps, Container, Text } from "./styles";

type Props = TouchableOpacityProps & {
  icon?: React.ReactNode;
  text: string;
  type?: ButtonIconStyleProps;
};

const Button = ({ icon, text, type = "primary", ...rest }: Props) => {
  return (
    <Container {...rest} type={type} activeOpacity={0.8}>
      {icon}
      <Text type={type}>{text}</Text>
    </Container>
  );
};

export default Button;
