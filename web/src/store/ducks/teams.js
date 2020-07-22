import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

// action redux
const { Types, Creators } = createActions({
  getTeamsRequest: null,
  getTeamsSuccess: ["data"],
});

export const TeamsTypes = Types;
export default Creators;

/* Initital State */
export const INITIAL_STATE = Immutable({
  data: [],
});

// Reducers

export const getSuccess = (state, { data }) => {
  return state.merge({ data });
};

// Reduces to types

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TEAMS_SUCCESS]: getSuccess,
});
