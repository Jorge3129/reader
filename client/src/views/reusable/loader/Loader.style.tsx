import styled from "styled-components";

interface IProps {
    light?: boolean
}

export const LoaderStyle = styled.div.attrs((props: IProps) => props)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  --loader-color: ${props => props.light ? '#fff' : props.theme.sidebarBg};
  --loader-bg-color: ${props => props.light ? props.theme.sidebarBg : '#fff'};


  & .loader {
    --loader-size: 4rem;
    height: var(--loader-size);
    width: var(--loader-size);
    border-radius: 50%;
    border: 0.3rem solid var(--loader-bg-color);
    background: conic-gradient(var(--loader-bg-color), var(--loader-color));
    display: flex;
    justify-content: center;
    align-items: center;
    animation: spin 2s linear infinite;
    //opacity: 0.24;
    margin: 3rem;
  }

  & .loader_inside {
    --inside-size: calc(82%);
    border-radius: 50%;
    background-color: var(--loader-bg-color);
    width: var(--inside-size);
    height: var(--inside-size);
  }


  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`