import React, { Component } from "react";

import { Container, TeamList, Team } from "./styles";

export default class TeamSwitcher extends Component {
  render() {
    return (
      <Container>
        <TeamList>
          <Team>
            <img
              alt="Team"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=Team"
            />
          </Team>
          <Team>
            <img
              alt="Team"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=Team"
            />
          </Team>
        </TeamList>
      </Container>
    );
  }
}
