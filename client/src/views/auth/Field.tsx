import React, {FC, PropsWithChildren} from 'react';
import styled from "styled-components";
import {FieldError} from "react-hook-form";

interface IProps {
    error?: FieldError
}

const Field: FC<PropsWithChildren<IProps>> = ({error, children}) => {

    return (
        <FieldStyled className={(error ? "error" : "")}>
            {children}
        </FieldStyled>
    );
};


export const FieldStyled = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.6rem 0;

  & label {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  & input {
    font-size: 1rem;
    border-radius: 0.2rem;
    border: 0.1rem solid ${props => props.theme.hover};
    padding: 0.3rem;
  }

  & .form_error {
    font-size: 1rem;
    color: crimson;
    padding: 0.1rem 0.2rem;
    margin-top: 0.6rem;
    border-radius: 0.4rem;
  }

  &.error input {
    border-color: crimson;
  }
`

export default Field;