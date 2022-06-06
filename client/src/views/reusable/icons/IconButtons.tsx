import styled from "styled-components";
import {MouseEvent, FC} from 'react'
import {IconKey, icons} from "../../../constants/icons";
import {strictTitleCase} from "../../../utils/format/titleCase";

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

export const WithIconButton = (iconKey: IconKey) => {
    const Component = (props: IProps) => (
        <Wrapper {...props}>
            {icons[iconKey as keyof typeof icons]}
        </Wrapper>)
    Component.displayName = strictTitleCase(iconKey) + 'Button'
    return Component
}

export const CopyButton: FC<IProps> = WithIconButton(IconKey.COPY)

export const AddButton: FC<IProps> = WithIconButton(IconKey.ADD)

export const DeleteButton: FC<IProps> = WithIconButton(IconKey.DELETE)
