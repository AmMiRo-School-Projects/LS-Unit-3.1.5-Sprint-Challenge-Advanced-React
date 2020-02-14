import React from "react";
import axios from "axios";
import PlayerList from "./components/PlayerList";
import Toggle from "./components/Toggle";
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log("response", res);
        this.setState({ players: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <AppDiv className="App">
        <Toggle />
        <PlayerList players={this.state.players} />
      </AppDiv>
    );
  }
}

export default App;
