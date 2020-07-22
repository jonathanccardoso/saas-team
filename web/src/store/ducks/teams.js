import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

// action redux
const { Types, Creators } = createActions({
  getTeamsRequest: null,
  getTeamsSuccess: ["data"],
  selectTeam: ["team"],
});

export const TeamsTypes = Types;
export default Creators;

/* Initital State */
export const INITIAL_STATE = Immutable({
  data: [],
  active: JSON.parse(localStorage.getItem("@Omni:team")) || null,
});

// Reducers

export const getSuccess = (state, { data }) => {
  return state.merge({ data });
};

export const selectTeam = (state, { team }) => {
  localStorage.setItem("@Omni:team", JSON.stringify(team));

  return state.merge({ active: team });
};

// Reduces to types

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TEAMS_SUCCESS]: getSuccess,
  [Types.SELECT_TEAM]: selectTeam,
});
