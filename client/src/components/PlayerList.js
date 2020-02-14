import React from "react";
import Player from "./Player";
import styled from "styled-components";

const ContainerDiv = styled.div`
  margin: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

function PlayerList(props) {
  console.log("PlayerList props", props.players);
  return (
    <ContainerDiv>
      <h2>Players</h2>
      <ListDiv>
        {props.players.map(player => {
          return <Player key={player.id} player={player} />;
        })}
      </ListDiv>
    </ContainerDiv>
  );
}

export default PlayerList;
