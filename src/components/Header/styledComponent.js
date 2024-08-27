import styled from 'styled-components'

export const HeaderBg = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : '#f4f4f4')};
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 8rem;
  color: ${props => (props.isDark ? '#f4f4f4' : '#313131')};
`
export const Button = styled.button`
  color: ${props => (props.isDark ? '#f4f4f4' : '#313131')};
  border: none;
  background-color: transparent;
  font-size: 2rem;
  margin: 0em;
  padding: 0%;
`
export const NavModelBg = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : '#f4f4f4')};
  padding: 2rem 1rem 2rem 1rem;
`
export const LogoutModelBg = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : '#f4f4f4')};
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Para = styled.p`
  color: ${props => (props.isDark ? '#f4f4f4' : '#313131')};
`
export const ConformButton = styled.button`
  border: none;
  color: white;
  margin-left: 5px;
  padding: 5px;
  background-color: blue;
`
export const CancelButton = styled.button`
  color: ${props => (props.isDark ? '#f4f4f4' : '#313131')};
  background-color: transparent;
  padding: 5px;
`
