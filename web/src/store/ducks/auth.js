import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

// action redux
const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signInSucess: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initital State */
export const INITIAL_STATE = Immutable({
  signedIn: false,
  token: null,
});

// Reducers

export const sucess = (state, { token }) => {
  console.log("token", token);
  return state.merge({ signedIn: true, token });
};

// Reduces to types

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCESS]: sucess,
});
