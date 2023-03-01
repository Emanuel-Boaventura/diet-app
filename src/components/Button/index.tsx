import { TouchableOpacityProps } from "react-native";
import { ButtonIconStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: string;
  type?: ButtonIconStyleProps;
};

const Button = ({ icon, type = "primary", ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
};

export default Button;
