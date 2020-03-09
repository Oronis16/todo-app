import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  padding: 20px;
  color: coral;
  font-weight: bold;
  font-size: 40px

;`

export const Header = () => {
  return(
    <Title>Todo app</Title>
  )
}