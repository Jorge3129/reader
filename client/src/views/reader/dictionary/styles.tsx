import styled from "styled-components";
import {AddButton, DeleteButton} from "../../reusable/CopyButton";
import light from "../../../providers/theme/themes/light";


export const DictStyle = styled.div`

  & .dict_title {
    padding: 0.5rem 0;
    text-align: center;
  }
`

interface IDictEntryStyle {
    light?: boolean
}

export const DictEntryStyle = styled.div.attrs(
    (props: IDictEntryStyle) => props
)`
  margin: 1rem;
  padding: 0.5rem;
  word-break: break-word;
  position: relative;
  background-color: ${props => props.light ?
          props.theme.background :
          props.theme.sidebarBg
  };
  border-radius: 0.3rem;

  & .word_type {
    color: blue;
  }
`
DictEntryStyle.displayName = 'DictEntryStyle'

export const AddButtonWrap = styled(AddButton)`
  position: absolute;
  top: 0;
  right: 0;
`

export const DeleteButtonWrap = styled(DeleteButton)`
  position: absolute;
  top: 0;
  right: 1rem;
`