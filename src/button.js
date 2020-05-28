import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
  display: inline-flex;
  border: 1px solid white;
  border-radius: 0.5em;
  min-width: 128px;
  padding: 0.7em;
  box-sizing: border-radius;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.5px;
`;

function Button() {
  return <ButtonStyled>Rules</ButtonStyled>;
}

export default Button;
