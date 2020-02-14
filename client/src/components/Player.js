import React from "react";
import styled from "styled-components";

const PlayerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.5%;
  margin: 1%;
  border: 1px solid black;
  border-radius: 2px;
  background: rgb(0, 0, 0, 0.6);
`;

function Player(props) {
  return (
    <PlayerDiv>
      <h3 data-testid="name">{props.player.name}</h3>
      <p data-testid="country">{`Country: ${props.player.country}`}</p>
      <p data-testid="searches">{`Searches: ${props.player.searches}`}</p>
    </PlayerDiv>
  );
}

export default Player;
