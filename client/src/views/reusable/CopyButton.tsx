import styled from "styled-components";
import {MouseEvent, FC, HTMLProps} from 'react'

type IProps = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => any
}

const Wrapper = styled.button<IProps>`
  background-color: transparent;
  color: ${props => props.theme.color};
  outline: none;
  border: none;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`

const CopyButton: FC<IProps> = (props) => {
    return <Wrapper {...props}>
        <i className="fa-regular fa-copy"></i>
    </Wrapper>
}

export const AddButton: FC<IProps> = (props) => {
    return <Wrapper {...props}>
        <i className="fa-solid fa-plus"/>
    </Wrapper>
}

export const DeleteButton: FC<IProps> = (props) => {
    return <Wrapper {...props}>
        <i className="fa-solid fa-trash"></i>
    </Wrapper>
}

export default CopyButton
