"use client";
import React from 'react';
import styled from 'styled-components';

// Styled button that accepts dynamic props for styling
const StyledButton = styled.button`
  background-color: ${({ bg }) => bg || 'blue'};
  color: ${({ color }) => color || 'white'};
  padding: ${({ padding }) => padding || '10px 20px'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  border: ${({ border }) => border || 'none'};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ hoverBg }) => hoverBg || 'darkblue'};
  }
`;

const Button = ({ 
  text, 
  onClick, 
  bg, 
  color, 
  padding, 
  borderRadius, 
  fontSize, 
  border, 
  hoverBg 
}) => {
  return (
    <StyledButton
      onClick={onClick}
      bg={bg}
      color={color}
      padding={padding}
      borderRadius={borderRadius}
      fontSize={fontSize}
      border={border}
      hoverBg={hoverBg}
    >
      {text}
    </StyledButton>
  );
};

export default Button;