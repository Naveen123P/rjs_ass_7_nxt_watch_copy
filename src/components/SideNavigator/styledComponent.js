import styled from 'styled-components'

export const SideContainer = styled.div`
  height: calc(100vh - 5rem);
  width: 20%;
  display: none;
  background-color: ${props => (props.isDark ? '#313131' : '#f4f4f4')};
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const Dummy = styled.div`
  display: none;
`
