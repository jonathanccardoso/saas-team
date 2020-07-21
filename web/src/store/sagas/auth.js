import { call, put } from "redux-saga/effects";
import { actions as toastrActions } from "redux-redux-toastr";
import api from "~/services/api";

import AuthActions from "../ducks/auth";

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, "sessions", { email, password });

    localStorage.setItem("@Omni:token", response.data.token);

    // disparo a action sucess
    yield put(AuthActions.signInSucess(response.data.token));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Falha no login",
        message: "Verifique seu e-mail/senha!",
      })
    );
  }
}
