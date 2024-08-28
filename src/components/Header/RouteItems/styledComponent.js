import styled from 'styled-components'

export const ListItem = styled.li`
  background-color: ${props => (props.isActive ? '#34f' : 'transparent')};
`

export const IconContainer = styled.div`
  color: red;
`

export const Para = styled.p`
  font-family: 'Roboto';
`
