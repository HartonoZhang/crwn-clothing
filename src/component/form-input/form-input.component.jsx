import React from 'react';

import {FormInputContainer, FormInputLabelContainer, GroupContainer} from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps}/>
        {
            label ?
            (<FormInputLabelContainer className={`${otherProps.value.length ? 'shrink' : ''}`}>
                {label}
            </FormInputLabelContainer>)
            : null
        }
    </GroupContainer>
)

export default FormInput;