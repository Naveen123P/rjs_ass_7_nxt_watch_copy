import styled from 'styled-components'

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isLiked ? 'blue' : '#94a3b8')};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  margin-right: 1rem;
`
export const SaveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #94a3b8;
  color: ${props => (props.isPresent ? 'blue' : '#94a3b8')};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  margin-right: 1rem;
`
export const DislikeButton = styled.button`
  background-color: transparent;
  border: none;
  color: #94a3b8;
  color: ${props => (props.isDisliked ? 'blue' : '#94a3b8')};
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
