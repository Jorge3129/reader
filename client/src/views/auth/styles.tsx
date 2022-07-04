import styled from "styled-components";


export const SubmitButton = styled.button`
  color: white;
  background-color: ${props => props.theme.highlight};
  padding: 0.5rem;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  font-size: 1.1rem;
  margin: 0.3rem 0;

  &:hover {
    cursor: pointer;
  }
`

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15rem;
  padding: 1rem;
`

export const MyInput = styled.input`

`