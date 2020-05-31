import React from "react";
import styled from "styled-components";

const ScoreStyled = styled.div`
  background: white;
  text-align: center;
  padding: 10px 0;
  border-radius: 8px;
  width: 80px;
  small {
    color: #2a45c2;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
  }
  p {
    color: #565458;
    font-size: 40px;
    margin: 0;
    font-weight: 700;
    /*font-family: Arial;*/
    font-family: "Barlow Semi Condensed", sans-serif;
    letter-spacing: -5px;
    position: relative;
    left: -2px;
  }
`;

function Score() {
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>731</p>
    </ScoreStyled>
  );
}

export default Score;
