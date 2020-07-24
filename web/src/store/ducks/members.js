import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

//Types e action creators redux

const { Types, Creators } = createActions({
  openMembersModal: null,
  closeMembersModal: null,
  getMembersRequest: null,
  getMembersSuccess: ["data"],
});

export const MembersTypes = Types;
export default Creators;

/* Initital State */

export const INITIAL_STATE = Immutable({
  data: [],
  membersModalOpen: false,
});

// Reducers

export const openModal = (state) => state.merge({ membersModalOpen: true });
export const closeModal = (state) => state.merge({ membersModalOpen: false });

export const getSuccess = (state, { data }) => state.merge({ data });

// Reduces to types

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_MEMBERS_MODAL]: openModal,
  [Types.CLOSE_MEMBERS_MODAL]: closeModal,
  [Types.GET_MEMBERS_SUCCESS]: getSuccess,
});