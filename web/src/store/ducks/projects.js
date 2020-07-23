import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

// action redux
const { Types, Creators } = createActions({
  getProjectsRequest: null,
  getProjectsSuccess: ["data"],
});

export const ProjectsTypes = Types;
export default Creators;

/* Initital State */
export const INITIAL_STATE = Immutable({
  data: [],
});

// Reducers

export const success = (state, { data }) => state.merge({ data });

// Reduces to types

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PROJECTS_SUCCESS]: success,
});
