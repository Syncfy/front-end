/* eslint-disable react/react-in-jsx-scope */
import {Button, ButtonText} from './style';

type CadastroButtonProps = {
  onPress: () => void;
  text: string;
};

export const CadastroButton: React.FC<CadastroButtonProps> = ({onPress, text}) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};
