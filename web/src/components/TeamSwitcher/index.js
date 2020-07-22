import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TeamsActions from "~/store/ducks/teams";

import { Container, TeamList, Team } from "./styles";

class TeamSwitcher extends Component {
  static propTypes = {
    getTeamsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getTeamsRequest } = this.props;

    console.log("call getTeamsRequest");
    getTeamsRequest();
  }

  render() {
    const { teams } = this.props;
    console.log("teams", teams);

    return (
      <Container>
        <TeamList>
          {teams.data.map((team) => (
            <Team key={team.name}>
              <img
                alt={team.name}
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
              />
            </Team>
          ))}
        </TeamList>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  teams: state.teams,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TeamsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeamSwitcher);
