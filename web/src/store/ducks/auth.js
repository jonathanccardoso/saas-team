import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

// action redux
const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signInSucess: ["token"],
  signOut: null,
  signUpRequest: ["name", "email", "password"],
  getPermissionsSuccess: ["roles", "permissions"],
});

export const AuthTypes = Types;
export default Creators;

/* Initital State */
export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem("@Omni:token"),
  token: localStorage.getItem("@Omni:token") || null,
  roles: [],
  permissions: [],
});

// Reducers

export const sucess = (state, { token }) => {
  // console.log("token", token);
  return state.merge({ signedIn: true, token });
};

export const logout = (state) => state.merge({ signedIn: false, token: null });

export const permissionsSuccess = (state, { roles, permissions }) =>
  state.merge({ roles, permissions });

// Reduces to types

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCESS]: sucess,
  [Types.SIGN_OUT]: logout,
  [Types.GET_PERMISSIONS_SUCCESS]: permissionsSuccess,
});
