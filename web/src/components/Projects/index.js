import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import Button from "~/styles/components/Button";

import { Container, Project } from "./styles";

const Projects = ({ activeTeam }) => {
  if (!activeTeam) return null;

  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Button onClick={() => {}}>+Novo</Button>
          <Button onClick={() => {}}>Membros</Button>
        </div>
      </header>

      <Project>
        <p>Title Project</p>
      </Project>
    </Container>
  );
};

Projects.propTypes = {
  activeTeam: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  activeTeam: state.teams.active,
});

export default connect(mapStateToProps)(Projects);
