import styled from "styled-components";
import {AddButton, DeleteButton} from "../../reusable/icons/IconButtons";
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
  margin: 0.8rem;
  padding: 0.7rem;
  word-break: break-word;
  position: relative;
  background-color: ${props => props.light ?
          props.theme.background :
          props.theme.sidebarBg
  };
  border-radius: 0.3rem;
  
  & .word_name {
    padding: 0 0 0.4rem 0;
  }
  
  & .highlight {
    color: ${props => props.theme.highlight};
  }

  & .word_type {
    color: ${props => props.theme.highlight};
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