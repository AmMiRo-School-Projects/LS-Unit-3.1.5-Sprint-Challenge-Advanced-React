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
      <h3>{props.player.name}</h3>
      <p>{`Country: ${props.player.country}`}</p>
      <p>{`Searches: ${props.player.searches}`}</p>
    </PlayerDiv>
  );
}

export default Player;
