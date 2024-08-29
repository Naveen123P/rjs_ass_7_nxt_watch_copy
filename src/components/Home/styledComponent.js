import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
`

export const HomeBg = styled.div`
  align-self: flex-start;
  width: 80%;
`
