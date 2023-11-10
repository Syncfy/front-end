import React from 'react';
import {
   CheckboxContainer,
   HiddenCheckbox,
   StyledCheckbox,
   Text
} from './style';

const CheckboxRegister: React.FC = () => {
   return (
      <CheckboxContainer>
         <HiddenCheckbox type="checkbox" />
         <StyledCheckbox />
         <Text>Instagram</Text>
      </CheckboxContainer>
   );
}

export default CheckboxRegister;
