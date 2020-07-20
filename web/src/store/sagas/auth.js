import { call, put } from "redux-saga/effects";
import api from "~/services/api";

import AuthActions from "../ducks/auth";

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, "session", { email, password });

    localStorage.setItem("@Omni:token", response.data.token);

    // disparo a action sucess
    yield put(AuthActions.signInSucess(response.data.token));
  } catch (err) {
    console.log(err);
  }
}
