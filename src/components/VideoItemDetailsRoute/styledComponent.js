import styled from 'styled-components'

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  color: #94a3b8;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  margin-right: 1rem;
`
export const CName = styled.p`
  color: ${props => (props.isDark ? '#f4f4f4' : '#000000')};
  margin: 0px;
  font-weight: 400;
`
