import React from 'react';

import { CustomButtonContainer } from './CustomButton.Styles'

const CustomButton = ({children, ...otherProps}) => (
    <CustomButtonContainer className='custom-button' {...otherProps}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;